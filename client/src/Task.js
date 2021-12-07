import React from 'react'
import { useLocation } from 'react-router';
import './Task.css'
import Navigation from './Navigation';
import User from './User';

const Task = () => {

    const { state } = useLocation();
    const t = state.t
    const user = state.user

    
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
                <div className='card'>
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
            </div>
            </div>
            </div>
            </div>

        </div>
      )
}

export default Task