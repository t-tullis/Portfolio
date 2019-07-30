import React from 'react'
import calendr from '../images/Calendr.png'
import instaclone from '../images/InstaClone.png'
import bubl from '../images/Bubl.gif'
import '../App.css'


function Projects(){

    return(
        <div className='projects'>
            <h1>Projects</h1>
            <div className='project-card'>
                <img src={calendr} />
                <div className='text-content'>
                    <h2>Calendr</h2>
                    <p>Calendr is a Calendar template manager application to serve all you calendar needs. 
                    </p>
                    <div className='project-links'>
                    <a href='https://www.calendr.netlify.com'>Live</a>
                    <a href='https://github.com/labs12-section-calendar-template'>GitHub Repo</a>
                    </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={bubl} />
                <div className='text-content'>
                    <h2>Bubl</h2>
                    <p>Social media app to help elementary school students transition into middle school
                    </p>
                    <div className='project-links'>
                    <a href='https://bubl-marketing.netlify.com/'>Live</a>
                    <a href='https://github.com/lambda-build-week-bubl'>GitHub Repo</a>
                    </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={instaclone} />
                <div className='text-content'>
                    <h2>Instaclone</h2>
                    <p>Instagram clone using react demonstrating knowledge of components.
                    </p>
                    <div className='project-links'>
                    <a href='https://github.com/t-tullis/React-Insta-Clone/tree/terrell-tullis3'>GitHub Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects