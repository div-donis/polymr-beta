import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const FilterType = ({ 
    active, 
    name, 
    onClick }) => {

    return (
        <div 
            onClick={onClick} 
            className='filters-child' 
            id={active ? 
            `filter-active` 
            : `filter-non-active`}
        >
            {name}
        </div>
    );
};

const Filter = ({
    handleFilterClick, 
    handleToggleDate,
    filter}) => {

    const filterTypes = ['all', 'self', 'critical']

    console.log(filter)
        
    return(
        <div className='filter'>
            <div className='filters'>
                {filterTypes.map(f => (
                    <FilterType
                        key={f}
                        name={f === 'all' ?
                            'Open' :
                            f === 'self' ?
                            'Self' : 
                            'Critical'}
                        active={f === filter}
                        onClick={() => handleFilterClick(f)}
                    />
                ))}
                <div className='filters-child' id='date' onClick={handleToggleDate}>Date<MdOutlineKeyboardArrowDown id='date-arrow'/></div>
            </div>
        </div>
    )
}

export default Filter