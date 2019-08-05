import React from 'react'
import '../App.css'

function SocialMediaBtns(props){
    return(
        <div className='levelDownWhiteSpace'>
            <div className='socialMedia'>
                <a href='https://www.github.com/terrelltullis' target='_blank'><i className="fab fa-github-alt fa-3x"></i></a>
                <a href='https://www.linkedin.com/in/terrelltullis/' target='_blank'><i className="fab fa-linkedin-in fa-3x"></i></a>
                <i className="fab fa-twitter fa-3x"></i>
            </div>
            <i onClick={props.onArrowClick} className="fas fa-level-down-alt fa-3x"></i>
        </div>
    )
}

export default SocialMediaBtns;