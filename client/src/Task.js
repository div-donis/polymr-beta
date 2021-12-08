import React from 'react'
import { useLocation } from 'react-router';
import './Task.css'
import Comments from './Comments';
import { useState, useEffect} from 'react'

const Task = () => {

    const [comments, setComments] = useState()
   
    const { state } = useLocation();
    

    useEffect(() => {
        fetch("/comments")
          .then((res) => res.json())
          .then((data) => setComments(data.filter((d) => d.task_id == state.t.id)))
          .catch(console.error);
    }, []);

  
    const [newComment, setNewComment] = useState('')
     
    const handleSubmitComment = (e) => {
        e.preventDefault();
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                comment: newComment,
                user_id: state.user.id,
                task_id: state.t.id
            })
        }) 
    }
    
    
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }

   

      return(
            <div className='task-grid'>
            <div className='task-container'>
            <div className='cards'>
                <div className='task-card'>
            <div className='content'>
                <div className='content-header'>
                    <div className='priority-dot' style={{backgroundColor: state.t.priority === 'critical' ? 'var(--critical)' : state.t.priority === 'moderate' ? 'var(--moderate)' : 'var(--intermediate'}}>
                    </div>
                    <div className='task-tag'>{state.t.priority === 'critical' ? 'critical' : state.t.priority === 'moderate' ? 'moderate' : state.t.priority === 'intermediate' ? 'intermediate' : null}
                    </div>                              
                    <div className='date-created'>Date Created: {state.t.created_at}</div>
                </div>
                <div className='content-body'>
                    <ul className='task-details'>
                        <li className='category'>Category: <a href='' className='task-links'>{titleCase(state.t.category)}</a></li>
                        <li className='subject'>Subject: {titleCase(state.t.subject)}</li>
                        <li className='description-pg'>{state.t.description}</li>
                    </ul>
                </div>
                <div className='status'>{state.t.status === 'new' ? 'open' : state.t.status}</div> 
                <div className='task-comments'>
                {comments ? comments.map((c) => 
                    
                        <Comments c={c}/>
                ) : null}
                <div>
                <form className='add-comment'onSubmit={handleSubmitComment}>
                    <textarea type="text" name="comment" onChange={(e) => setNewComment(e.target.value)}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

        </div>
      )
}

export default Task