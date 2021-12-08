import React from "react"
import './TaskGrid.css'
import Tasks from './Tasks'
import Filter from './Filter'
import { useState, useEffect } from 'react'
import { Link }from 'react-router-dom'

const TaskGrid = ( {user} ) => {

const [tasks, setTasks] = useState([])
const [filterBy, setFilterBy] = useState();

useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error);
}, []);
console.log(tasks)
tasks.sort((a, b) => (a.priority > b.priority) ? 1 : -1)

function handleFilterClick(x) {
    if(x==='closed'){
       setFilterBy(x);
    }else if(x==='new'){
        setFilterBy(x);
    }else if(x===user.email){
        setFilterBy(x)
    }else{
        setFilterBy(x);
    }  
}

const filteredTasks = tasks.filter((task) => {
    if(filterBy === 'new'){
        return task.status === filterBy
    }else if(filterBy === 'closed'){
        return task.status === filterBy
    }else if(filterBy === user.email){
        return task.assigned_to === filterBy && task.status === 'claimed'
    }else{ 
        return task.status !== filterBy
    }
});

 


    return(
        <div className='task-grid'>
            <Filter handleFilterClick={handleFilterClick} user={user}/>
            <div className='task-container'>
                
                <div className='cards'>
                {filteredTasks.map((t) => 
                    <Link 
                    to={{pathname: `/task/${t.id}`,
                    state: {t, user}
                }}
                style={{ textDecoration: 'none', color: 'var(--font)' }}
                    >
                        <Tasks t={t} key={t.id} user={user}/>
                    </Link>
                )}
                </div>
            </div>
        </div>
    )
}

export default TaskGrid