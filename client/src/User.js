import React from 'react'
import './User.css'

const User = ( {user, handleLogout} ) => {
        
    
        return (
        <div className='user'>
            <div className='user-fix'>       
                <div className='avi-box'>
                    <div><img className='avi' alt='avi' src={`${user.avi}`}></img></div>
                    <div className='user-name'>{user.name}</div>
                    <div className='company'>{user.company} </div>
                </div>
                <div className='user-controls'>
                    <div className='log-out' onClick={handleLogout}>
                        Log Out
                    </div>
                </div>
            </div>
        </div>
        )
   
           
        
    
}

export default User