import React from 'react'
import './Task.css'
import Comments from './Comments';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const Task = ( {tasks, user} ) => {
 
    const { id } = useParams()
    
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }

    const [value, setValue] = useState(false)
    
    const refresh = ()=>{
        setValue((value) => !value);
    }
   
    return(
        <div className='solo-task-grid'>
            {tasks.filter((t) => t.id === parseInt(id) )
            .map((t) => ( 
                <div key={t.id} className='task-container'>
                    <div className='cards'>
                        <div className='task-card'>
                            <div className='content'>
                                <div className='content-header'>
                                    <div className='priority-dot' style={{backgroundColor: t.priority === 'critical' ? 'var(--critical)' : t.priority === 'moderate' ? 'var(--moderate)' : 'var(--intermediate'}}></div>
                                    <div className='task-tag'>{t.priority === 'critical' ? 'critical' : t.priority === 'moderate' ? 'moderate' : t.priority === 'intermediate' ? 'intermediate' : null}</div>                              
                                    <div className='date-created'>Date Created: {t.created_at}</div>
                                </div>
                                <div className='content-body'>
                                    <ul className='task-details'>
                                        <li className='category'>Category: <u className='task-links'>{titleCase(t.category)}</u></li>
                                        <li className='subject'>Subject: {titleCase(t.subject)}</li>
                                        <li className='description-pg'>{t.description}</li>
                                    </ul>
                                </div>
                                
                                <div className='status'>{t.status === 'new' ? 'new' : t.status === 'claimed' ? `${t.status} by ${t.assigned_to}` : t.status === 'closed' ? `${t.status} by ${t.closed_by}` : null}</div> 
                                <div className='task-comments'>
                                    <Comments id={id} user={user} refresh={refresh}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}

export default Task