import React from "react";
import './Navigation.css'
import {
    BsHouseFill,
    BsGraphUp,
    BsPencilSquare,
    BsFillBellFill
}
from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <div className='navigation'>         
                <nav className='nav-options'>
                <Link 
                    to="/tasks" 
                    style={{textDecoration: 'none', color: 'var(--settled)'}}>
                    <div className='nav-link' id='tasks-tab'><BsHouseFill /></div>
                </Link>
                    <div className='nav-link' id='reports-tab'><BsGraphUp /></div>
                <Link 
                    to="/tasks/create-new" 
                    style={{textDecoration: 'none', color: 'var(--settled)'}}>
                    <div className='nav-link' id='create-new-tab'><BsPencilSquare /></div>   
                </Link>
                    <div className='nav-link' id='notifications-tab'><BsFillBellFill /></div>
                </nav>
        </div>
    )
}

export default Navigation