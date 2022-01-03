import React from "react"
import Filter from './Filter'
import { Link } from 'react-router-dom'
import  { useState }  from 'react'
import Moment from 'react-moment';

const Tasks = ({
    filter, 
    filteredTasks, 
    handleFilterClick}) => {
    const [filterDate, setFilterDate] = useState(false)
    const [filterPriority, setFilterPriority] = useState(false)

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
    }

    const sortByPriority = () => {
        if(filterPriority === false){
            filteredTasks.sort(function (x, y) {     
                let a = x.priority,         
                b = y.priority   
                return a === b ? 0 : a > b ? 1 : -1 
            })
        }else{
            filteredTasks.sort(function (x, y) {     
                let b = x.priority,         
                a = y.priority   
                return a === b ? 0 : a > b ? 1 : -1 
            })
        }   
    }

    const handleTogglePriority = () => {
        setFilterPriority((filterPriority) => !filterPriority)
        sortByPriority()
        const x = document.getElementById('priority-arrow')
        if (filterPriority === true){
            x.style.transform = 'rotate(-180deg)'
        }else{
            x.style.transform = 'rotate(0deg)'
        }
    }

    const sortByDate = () => {
        if(filterDate === false){
            filteredTasks.sort(function (x, y) {     
                let a = x.created_at,         
                b = y.created_at   
                return a === b ? 0 : a > b ? 1 : -1 
            })
        }else{
            filteredTasks.sort(function (x, y) {     
                let b = x.created_at,         
                a = y.created_at   
                return a === b ? 0 : a > b ? 1 : -1 
            })
        }   
    }

    const handleToggleDate = () => {
        setFilterDate((filterDate) => !filterDate)
        sortByDate()
        const x = document.getElementById('date-arrow')
        if (filterDate === false){
            x.style.transform = 'rotate(-180deg)'
        }else{
            x.style.transform = 'rotate(0deg)'
        }
    }


    return(
        <div className='task-grid'>
            {filteredTasks ? <div className='task-container'>      
                <div className='cards'>
                    <Filter 
                        handleTogglePriority={handleTogglePriority} 
                        handleToggleDate={handleToggleDate} 
                        handleFilterClick={handleFilterClick}
                        filter={filter}
                    />
                    <div className='card-container'>
                    {filteredTasks.length > 0 ?
                    filteredTasks.map((t) =>   
                        <div  key={t.id} className='card'>
                            <div className='content'>
                                <div className='content-header'>
                                    <div className='priority-dot' style={{backgroundColor: t.priority === 'critical' ? 'var(--critical)' : t.priority === 'moderate' ? 'var(--moderate)' : 'var(--intermediate'}}>
                                    </div>
                                    <div className='task-tag'>{t.priority === 'critical' ? 'critical' : t.priority === 'moderate' ? 'moderate' : t.priority === 'intermediate' ? 'intermediate' : null}
                                    </div>                              
                                    <div className='date-created'>Date Created: 
                                        <Moment format="MM/DD/YYYY">
                                            {t.created_at}
                                        </Moment>
                                    </div>
                                </div>
                                    <div className='content-body'>
                                        <ul className='task-details'>
                                            <li className='category'>Category: <u className='task-links'>{titleCase(t.category)}</u></li>
                                            <Link className='tdl' to={`/tasks/${t.id}`}>
                                                <li className='subject'>Subject: {titleCase(t.subject)}</li>
                                                <li className='description'>{t.description}</li>
                                            </Link>
                                        </ul>
                                    </div>
                                <div className='status'>{t.status === 'new' ? 'new' : t.status}</div>
                            </div>
                        </div>
                    )
                    : 
                    <div className='no-card'>
                        <div className='content'>
                            Nothing to see here...
                        </div>
                    </div>
                    }
                    </div>
                </div>
            </div> : null}  
        </div>
    )
}
    
export default Tasks