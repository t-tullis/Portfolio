import React, { useState} from 'react'
import Projects from './Projects.js'
import Resume from './Resume.js'
import '../App.css'

function ArrowNav(){

    const [projects, setProjects] = useState({
        isToggleOn: false
    })
    
    const [resume, setResume] = useState({
        isToggleOn: false
    })

    let onLeftArrowClick = (e) => {
        e.preventDefault()

        setProjects({
            isToggleOn: !projects.isToggleOn
        })
    }

    let onRightArrowClick = (e) => {
        e.preventDefault();
        setResume({
            isToggleOn: !resume.isToggleOn
        })
    }

        return(
            <div className='allArrows'>
                <div className='left-right-arrow'>
                         <i onClick={onLeftArrowClick} className="fas fa-chevron-left fa-3x"></i>
                         <div className='arrowCategory'>
                            <p onClick={onLeftArrowClick} className='projects-text'>Projects</p>
                            <p className='arrow-instructions'>Click Project/Resume Arrow To View</p>
                            <p className='mobile-instruction'>View Below</p>
                            <p onClick={onRightArrowClick}className='resume-text'>Resume</p>
                        </div>
                        <i onClick={onRightArrowClick} className="fas fa-chevron-right fa-3x"></i>
                </div>
                <i className="fas fa-chevron-down fa-3x"></i>
                {projects.isToggleOn && <Projects />}
                {resume.isToggleOn && <Resume />}
            </div>
        )
    }



export default ArrowNav;