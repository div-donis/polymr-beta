import React from 'react'

const EditComment = ({ setEditedComment, c, handleEditComment}) => {

    return(
        <form className='edit-comment'>
            <textarea defaultValue={`${c.content}`} onChange={(e) => setEditedComment(e.target.value)}></textarea>
            <input type='submit' onClick={handleEditComment}></input>
        </form>
    )
}

export default EditComment