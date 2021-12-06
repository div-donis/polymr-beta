import React from "react";
import './Navigation.css'
import { 
    ImHome,
    ImTable2,
    ImStatsBars2,
    ImAddressBook,
    ImUsers
 } from 'react-icons/im'

const Navigation = () => {
    return(
        <div className='navigation'>
            <div className='nav-fix'>
                <div className='nav-options'>
                    <div className='nav-link' id='home-tab'><ImHome className='nav-icons'/> Home</div>
                    <div className='nav-link' id='task-grid-tab'><ImTable2 className='nav-icons'/> Task Grid</div>
                    <div className='nav-link' id='reports-tab'><ImStatsBars2 className='nav-icons'/> Reports</div>
                    <div className='nav-link' id='accounts-tab'><ImAddressBook className='nav-icons'/> Accounts</div>
                    <div className='nav-link' id='users-tab'><ImUsers className='nav-icons'/> Users</div>
                </div>
            </div>
        </div>
    )
}

export default Navigation