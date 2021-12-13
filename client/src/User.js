import React from 'react'
import './User.css'
import { useNavigate } from 'react-router-dom'

const User = ( { user, setUser} ) => {
    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate('/signin');
            window.location.reload()
          }
        })
      }
          
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