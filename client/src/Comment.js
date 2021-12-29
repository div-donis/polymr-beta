import React from 'react'
import { 
    FiDelete, 
    FiEdit
} from 'react-icons/fi'
import { useState } from 'react'
import EditComment from './EditComment'

const  Comment = ( {c, user, handleDelete, id, setEditedComment, editedComment, handleUpdatedComment} ) => {

    const [isEditing, setIsEditing] = useState(false)

    const handleEditComment = (e) => {
        e.preventDefault();
        fetch(`/api/comments/${c.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                content: editedComment,
                user_id: user.id,
                task_id: id
            }), 
            headers: {
                "Content-type": "application/json"
            },
        }).then(resp => resp.json())
        .then(json => console.log(json))
        .catch(console.error);
        handleEditing()
        handleUpdatedComment(c.id)
    }

    const handleEditing = () => {
        setIsEditing((isEditing) => !isEditing)
    }
    
    return (
        <div className='comment-component'>
           
            <div className='task-comment'>
                <div className='comment-user'>
                    <div>
                        <div className='comment-img'>
                            <img alt='avi' src={`${c.user.avi}`}></img>
                        </div> 
                        <div className='comment-name'>{c.user.name}</div>
                        <div className='delete-btn'>{user.id === c.user.id ? <><FiEdit onClick={handleEditing} /><FiDelete onClick={() => handleDelete(c.id)}/></> : null}</div>
                    </div>
                </div>
                <div className='comment-content'>{isEditing ? <EditComment handleEditComment={handleEditComment} setEditedComment={setEditedComment} c={c}/> : c.content }</div>
            </div>
            
        </div>
    )
}

export default Comment