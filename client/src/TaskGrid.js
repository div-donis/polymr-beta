import React from "react"
import './TaskGrid.css'
import Tasks from './Tasks'
import Task from './Task'
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'


const TaskGrid = ( {user} ) => {

const [tasks, setTasks] = useState([])
const [filterBy, setFilterBy] = useState();

useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error);
}, []);


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

const filteredTasks = tasks?.filter((task) => {
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
            <Routes>
                <Route exact path='/' element={<Tasks user={user} handleFilterClick={handleFilterClick} filteredTasks={filteredTasks} />} />
                <Route path='/:id' element={<Task user={user} tasks={tasks} />} />
            </Routes>
    )
}

export default TaskGrid