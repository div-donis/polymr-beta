import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Filter = ({handleFilterClick}) => {

    return(
        <div className='filter'>
            <div className='filters'>
                <div className='filters-child'  id='all' onClick={() => handleFilterClick('all')}>All</div>
                <div className='filters-child'  id='self'>Self</div>
                <div className='filters-child'  id='new' onClick={() => handleFilterClick('new')}>Open</div>
                <div className='filters-child' id='closed' onClick={() => handleFilterClick('closed')}>Closed</div>
                <div className='filters-child' id='date'>Date<MdOutlineKeyboardArrowDown className='date-arrow'/></div>
            </div>
        </div>
    )
}

export default Filter