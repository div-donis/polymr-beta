import React from 'react'
import { useState, useEffect } from 'react';

const Comments = ( {c} ) => {

    const [oUser, setOUser] = useState()
 

    useEffect(() => {
          fetch("/users")
            .then((res) => res.json())
            .then((data) => setOUser(data.filter((d) => d.id == c.user_id)))
            .catch(console.error);
      }, []);


      console.log(oUser)
     

    return(
        <div>
            {oUser ? <div key={c.id} className='task-comment'>
                
                <div className='comment-oUser'>
                    <div className='comment-img'><img src={`${oUser[0].avi}`}></img></div>
                    <div className='comment-name'>{oUser[0].name}</div>
                </div>
                <div className='comment-content'>{c.content}</div>
            </div>: null}
        </div>
                    
    )
}

export default Comments