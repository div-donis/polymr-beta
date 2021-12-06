import React from "react"
import './TaskGrid.css'
import Task from './Task'
import Filter from './Filter'
import { useState, useEffect } from 'react'

const TaskGrid = () => {

const [tasks, setTasks] = useState([])
const [filterBy, setFilterBy] = useState();

useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error);
}, []);

tasks.sort((a, b) => (a.priority > b.priority) ? 1 : -1)

function handleFilterClick(x) {
    if(x==='closed'){
       setFilterBy(x);
    }else if(x==='new'){
        setFilterBy(x);
    }else{
        setFilterBy(x);
    }  
}

const filteredTasks = tasks.filter((task) => {
    if(filterBy === 'new'){
        return task.status === filterBy
    }else if(filterBy === 'closed'){
        return task.status === filterBy
    }else{
        return task.status !== filterBy
    }
});

    {/* document.getElementById('closed').style.backgroundColor = 'var(--primary)'
    document.getElementById('open').style.backgroundColor = 'var(--secondary)'
    document.getElementById('open').style.backgroundColor = 'var(--primary)'
    document.getElementById('closed').style.backgroundColor = 'var(--secondary)' */}    


console.log(tasks)
    return(
        <div className='task-grid'>
            <div className='task-container'>
                <Filter handleFilterClick={handleFilterClick} />
                <div className='cards'>
                {filteredTasks.map((t) => 
                    <Task t={t} key={t.id}/>
                )}
                </div>
            </div>
        </div>
    )
}

export default TaskGrid