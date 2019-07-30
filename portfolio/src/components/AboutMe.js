import React from 'react'
import ArrowNav from './ArrowNav.js'
import '../App.css'

function AboutMe(props){
    return(
        <div className='about-me'>
            <div className='about-me-content'>
            <h1>ABOUT ME</h1>
            <p>
                Hey everyone welcome to my portfolio. A little about myself, I am from Washington, D.C. 
                I was a former security guard before becoming a full-stack web developer. 
                Working graveyard shifts I had a lot of spare time so I began to teach myself the 
                fundamentals of web development. Using sources like codecademy and freecodecamp made 
                me realize I loved coding and wanted to make a career out of it. I then took a leap of
                 faith and moved to the bay area to pursue a career as a developer. 
			</p>
            <br />
			<p>
				I'm also a General Assembly alumnus, I completed the Web Development Immersive in 
                April of 2018. After completing the immersive, I felt I need an extra push to get a full 
                grasp of full-stack web development so I applied to Lambda School. I'm currently a 
                Lambda student and this has been the best decision of my life because I feel everything 
                coming together and getting comfortable being a Developer. 
			</p>
            <div>
            <ArrowNav/>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;