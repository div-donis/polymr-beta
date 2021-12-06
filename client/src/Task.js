import React from "react"

const Task = ({t}) => {

     
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

    return(
        <div className='card'>
            <div className='content'>
                <div className='content-header'>
                    <div className='priority-dot' style={{backgroundColor: t.priority === 'critical' ? 'var(--critical)' : t.priority === 'moderate' ? 'var(--moderate)' : 'var(--intermediate'}}>
                    </div>
                    <div className='task-tag'>{t.priority === 'critical' ? 'critical' : t.priority === 'moderate' ? 'moderate' : t.priority === 'intermediate' ? 'intermediate' : null}
                    </div>                              
                    <div className='date-created'>Date Created: {t.created_at}</div>
                </div>
                <div className='content-body'>
                    <ul className='task-details'>
                        <li className='category'>Category: <a href='' className='task-links'>{titleCase(t.category)}</a></li>
                        <li className='subject'>Subject: {titleCase(t.subject)}</li>
                        <li className='description'>{t.description}</li>
                    </ul>
                </div>
                <div className='status'>{t.status === 'new' ? 'open' : t.status}</div>
            </div>
        </div>
    )
}
    
export default Task