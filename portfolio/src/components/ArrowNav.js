import React from 'react'
import '../App.css'

function ArrowNav(){
    return(
        <div className='allArrows'>
            <div className='left-right-arrow'>
                <i className="fas fa-chevron-left fa-3x"></i>
                <i className="fas fa-chevron-right fa-3x"></i>
            </div>
            <i className="fas fa-chevron-down fa-3x"></i>
        </div>
    )
}

export default ArrowNav;