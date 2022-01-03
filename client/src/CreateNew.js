import React from 'react'
import './CreateNew.css'

const Priority = ({ active, name, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            className='new-task-tag' 
            id={active ? 
            `${name}-active` 
            : `${name}-non-active`}
        >
            {name}
        </div>
    );
};

const Categories = ({ active, name, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            className='new-task-cat' 
            className={active ? 
            `cat-active` 
            : `cat-non-active`}
        >
            {name}
        </div>
    );
};

const CreateNew = ({
    dot,
    cat,
    setDot,
    setCat,
    error,
    handleBody,
    handleSubject,
    submitAll}) => {

    const priority = ['moderate', 'intermediate', 'critical'];
    const categories = ['version-control', 'database', 'feature', 'compiler', 'development', 'reports', 'account', 'miscellaneous bug']

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
                        {priority.map(t => (
                            <Priority
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
                            {categories.map(c => (
                                <Categories
                                key={c}
                                name={titleCase(c)}
                                active={c === cat}
                                onClick={() => setCat(c)}
                                />
                            ))}                             
                            </li>                            
                            <li className='new-subject'>Subject: 
                                <input 
                                    type='text' 
                                    className='new-task-subject' 
                                    autoFocus 
                                    onChange={(e) =>  handleSubject(e.target.value)}>
                                </input>
                            </li>
                            <li className='body-input'>
                                <textarea 
                                    className='new-task-input' 
                                    onChange={(e) =>  handleBody(e.target.value)}>
                                </textarea>
                                <input 
                                    type="submit" 
                                    value='Send' 
                                    onClick={() => submitAll()}>
                                </input>
                            </li>
                            <li className='error-new-task'>{error}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNew