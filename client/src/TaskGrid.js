import React from "react"
import './TaskGrid.css'
import Tasks from './Tasks'
import Task from './Task'
import CreateNew from './CreateNew';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'

const TaskGrid = ( { user} ) => {

    const [tasks, setTasks] = useState([])
    const [filterBy, setFilterBy] = useState()

    useEffect(() => {
        fetch(`/accounts/${user.account.id}/tasks`)
          .then((res) => res.json())
          .then((data) => setTasks(data))
          .catch(console.error);
    }, []);

    function handleFilterClick(x) {
        if(x ==='all'){
            setFilterBy(x);
        }else if(x === user.email){
            setFilterBy(x)
        }else if(x === 'critical'){
            setFilterBy(x)
        }else{
            setFilterBy(x);
        }  
    }

    tasks?.sort(function (x, y) {     
        let b = x.created_at,         
        a = y.created_at   
        return a === b ? 0 : a > b ? 1 : -1 
    })

    const filteredTasks = tasks?.filter((task) => {
        if(filterBy === 'all'){
            return task.status !== 'closed'
        }else if(filterBy === 'critical'){
            return task.priority === 'critical'
        }else{ 
            return task.assigned_to === user.email
            
        }
    });

    return(  
        <Routes>
            <Route exact path='/' element={<Tasks user={user} handleFilterClick={handleFilterClick} filteredTasks={filteredTasks} />} />
            <Route path='/:id' element={<Task user={user} tasks={tasks} />} />
            <Route path="/create-new" element={<CreateNew />} />  
        </Routes>
    )
}

export default TaskGrid