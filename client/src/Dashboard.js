import React from "react";
import TaskGrid from './TaskGrid'
import User from './User'
import Navigation from "./Navigation";
import './Dashboard.css'

const Dashboard = ( {user, handleLogout} ) => {

    
    return(
        <div className='dashboard'>
            <Navigation />
            <TaskGrid />
            <User handleLogout={handleLogout} user={user}/>
        </div>
    )
}

export default Dashboard