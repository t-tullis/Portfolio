import React from 'react'
import ResumeFile from '../images/Resume.png'
import '../App.css'

function Resume(){
    return(
        <div className='resume'>
            <h1> Resume </h1>
            <img src={ResumeFile} />
        </div>
    )
}

export default Resume