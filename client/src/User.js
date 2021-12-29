import React from 'react'
import './User.css'
import { useNavigate } from 'react-router-dom'
import {
  WiMoonAltWaningCrescent6,
  WiMoonAltWaxingCrescent1
} from "react-icons/wi";

const User = ( { user, setUser, toggleDarkMode, darkMode} ) => {
    const navigate = useNavigate()

    function handleLogout() {
        fetch("/api/logout", {
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
                  <div className="theme-toggle" onClick={toggleDarkMode}>
                    {darkMode ? <><WiMoonAltWaningCrescent6 className='mode-icon'/> Light Mode</> : <><WiMoonAltWaxingCrescent1 className='mode-icon'/> Dark Mode</>}
                  </div>
                  <div className='log-out' onClick={handleLogout}>
                      Log Out
                  </div>
                </div>
            </div>
        </div>
        )
   
           
        
    
}

export default User