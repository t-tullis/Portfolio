import React from 'react'
import ArrowNav from './ArrowNav.js'
import '../App.css'

function AboutMe(){
    return(
        <div className='about-me'>
            <div className='about-me-content'>
            <h1>ABOUT ME</h1>
            <p>This is a section about me This is a section about me This is a section about me This is a section about me
            This is a section about me This is a section about me This is a section about me This is a section about me This is a section about me
            This is a section about me This is a section about me This is a section about me
            </p>
            <ArrowNav />
            </div>
        </div>
    )
}

export default AboutMe;