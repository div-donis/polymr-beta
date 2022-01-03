import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Filter = ({
    handleFilterClick, 
    handleToggleDate}) => {
        
    return(
        <div className='filter'>
            <div className='filters'>
                <div className='filters-child'  id='new' onClick={() => handleFilterClick('all')}>Open</div>
                <div className='filters-child'  id='self' onClick={() => handleFilterClick('self')}>Self</div>
                <div className='filters-child' id='critical' onClick={() => handleFilterClick('critical')}>Critical</div>
                <div className='filters-child' id='date' onClick={handleToggleDate}>Date<MdOutlineKeyboardArrowDown id='date-arrow'/></div>
            </div>
        </div>
    )
}

export default Filter