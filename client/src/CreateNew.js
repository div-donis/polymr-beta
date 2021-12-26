import React from 'react'
import './CreateNew.css'
import { useState } from 'react'

const Status = ({ active, name, onClick }) => {
    return (
      <div onClick={onClick} className='new-task-tag' id={active ? `${name}-active` : `${name}-non-active`}>
        {name}
      </div>
    );
};

const CreateNew = () =>{

    const [dot, setDot] =  useState('moderate')
    const status = ['moderate', 'intermediate', 'critical'];
    const[category, setCategory] = useState()
    const categories = ['version-control', 'database', 'feature', 'compiler', 'development', 'reports', 'account', 'miscellaneous bug']
 
    const handleCategory = (e) => {
        setCategory(e)
    }

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }    

    return(
        <div className='create-new'>
            <div className='new-card'>
                <div className='new-content'>
                    <div className='new-content-header'>
                        <div className='priority-dot' style={{backgroundColor: `var(--${dot})`}} >
                        </div>
                        {status.map(t => (
                            <Status
                            key={t}
                            name={t}
                            active={t === dot}
                            onClick={() => setDot(t)}
                            />
                        ))}                           
                    </div>
                        <div className='content-body'>
                            <ul className='new-task-details'>
                                <li className='new-category'>Category:                             
                                </li>                            
                                    <li className='new-subject'>Subject: <input type='text' className='new-task-subject'></input></li>
                                    <li><textarea className='new-task-input'></textarea></li>
                      
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNew