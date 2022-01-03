import React from 'react'
import './Task.css'
import Comments from './Comments';
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Moment from 'react-moment';

const Task = ({
    tasks, 
    user, 
    setFilterBy}) => {
 
    const { id } = useParams()

    const navigate = useNavigate()
    
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

    const handleEditStatus = (x) => {
        if(x === 'claimed'){
            fetch(`/api/tasks/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: 'claimed',
                    assigned_to: user.username,
                }), 
                headers: {
                    "Content-type": "application/json"
                },
            }).then(resp => resp.json())
            .then(json => console.log(json))
            .catch(console.error);
            window.location.reload(false);
        }else{
            fetch(`/api/tasks/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: 'closed',
                    closed_by: user.username,
                }), 
                headers: {
                    "Content-type": "application/json"
                },
            }).then(resp => resp.json())
            .then(json => console.log(json))
            .catch(console.error);
            setFilterBy('all')
            navigate('/tasks')
            window.location.reload(false);
        }
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
                                    <div className='date-created'>Date Created: 
                                        <Moment format="MM/DD/YYYY">
                                            {t.created_at}
                                        </Moment>
                                    </div>
                                </div>
                                <div className='content-body'>
                                    <ul className='task-details'>
                                        <li className='category'>Category: <u className='task-links'>{titleCase(t.category)}</u></li>
                                        <li className='subject'>Subject: {titleCase(t.subject)}</li>
                                        <li className='description-pg'>{t.description}</li>
                                    </ul>
                                </div>
                                { t.status === 'new' ? <div onClick={() => handleEditStatus('claimed')} id='claim-btn'>claim</div> : t.status === 'claimed' && t.assigned_to === user.username ? <div onClick={() => handleEditStatus('closed')} id='close-btn'>close</div> : null }
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