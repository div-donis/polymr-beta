import React from 'react'
import { useState, useEffect } from 'react';
import Comment from './Comment'


const Comments = ( {id, user, refresh} ) => {

    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [editedComment, setEditedComment] = useState('')

    function handleAddComment(comment) {
        setComments([...comments, comment])
    }

    function handleRemoveComment(id) {
        const removeIndex = comments.findIndex(item => item.id === parseInt(id));
        comments.splice(removeIndex, 1);
        refresh();
    }

    useEffect(() => {
           fetch(`/tasks/${id}/comments`)
             .then((res) => res.json())
             .then((data) => setComments(data))
             .catch(console.error);
       }, []);

    const handleSubmitComment = (e) => {
        e.preventDefault();
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                content: newComment,
                user_id: user.id,
                task_id: parseInt(id)
            })
        }).then(resp => resp.json())
        .then(addcomment => {
            handleAddComment(addcomment)
            console.log(addcomment)
            e.target.reset();
        })
        setNewComment('');
        refresh()
    }

    const handleDelete = (e) => {
        fetch(`/comments/${e}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        })
        .then(console.log('deleted'))
        handleRemoveComment(e)
    }

     const filteredComments = comments.filter((c) => c.task_id === parseInt(id))
     
     function handleUpdatedComment(id) {
        filteredComments.find(item => {
            if (item.id === parseInt(id)){item.content = editedComment}
        });
    }
    
    return(
        <div>
            { filteredComments ? 
            filteredComments.map((c) => <Comment key={c.id} editedComment={editedComment} handleUpdatedComment={handleUpdatedComment} setEditedComment={setEditedComment} id={id} refresh={refresh} c={c} handleDelete={handleDelete} user={user}/>) : null }
            <form className='add-comment'onSubmit={handleSubmitComment}>
                <textarea type="text" name="comment" autofocus onChange={(e) => setNewComment(e.target.value)}></textarea>
                <input type="submit" value='Send'></input>
            </form>
        </div>
                    
    )
}

export default Comments