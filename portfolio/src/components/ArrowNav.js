import React, { useState, useRef } from 'react'
import Projects from './Projects.js'
import Resume from './Resume.js'
import '../App.css'

function ArrowNav(){
    let myRef = useRef()

    const [projects, setProjects] = useState({
        isToggleOn: false
    })
    
    const [resume, setResume] = useState({
        isToggleOn: false
    })

    let onLeftArrowClick = () => {
        setProjects({
            isToggleOn: !projects.isToggleOn
        })
    }

    let onRightArrowClick = () => {
        setResume({
            isToggleOn: !resume.isToggleOn
        })
    }

        return(
            <div className='allArrows'>
                <div className='left-right-arrow'>
                         <i onClick={onLeftArrowClick} className="fas fa-chevron-left fa-3x"></i>
                         <div className='arrowCategory'>
                            <p className='projects-text'>Projects</p>
                            <p className='arrow-instructions'>Click Project/Resume Arrow To View</p>
                            <p className='resume-text'>Resume</p>
                        </div>
                        <i onClick={onRightArrowClick} className="fas fa-chevron-right fa-3x"></i>
                </div>
                    {projects.isToggleOn && <Projects />}
                    {resume.isToggleOn && <Resume />}
                <i className="fas fa-chevron-down fa-3x"></i>
            </div>
        )
    }



export default ArrowNav;