/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Profile.css';

export default function Profile() {
  return (
    <div className='Profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                <a href='https://www.facebook.com/melat.samuel.94?mibextid=ZbWKwL'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.instagram.com/p/CGcwel0npxL/?igshid=YmMyMTA2M2Y='>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://github.com/melatsam'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    </div>
                </div>


            
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'M <span className='highligted-text'>MELAT</span>
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn'>
                    {""}
                    Hire Me
                </button>
                <a href='melatcv.pdf' download='melat melatcv.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                </a>
            </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}



