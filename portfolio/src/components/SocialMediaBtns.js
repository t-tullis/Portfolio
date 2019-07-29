import React from 'react'
import '../App.css'

function SocialMediaBtns(props){
    return(
        <div className='levelDownWhiteSpace'>
            <div className='socialMedia'>
                <i className="fab fa-github-alt fa-3x"></i>
                <i className="fab fa-linkedin-in fa-3x"></i>
                <i className="fab fa-twitter fa-3x"></i>
            </div>
            <i onClick={props.onArrowClick} className="fas fa-level-down-alt fa-3x"></i>
        </div>
    )
}

export default SocialMediaBtns;