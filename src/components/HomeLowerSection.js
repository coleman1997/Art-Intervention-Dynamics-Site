import React from 'react'
import { Parallax } from 'react-parallax'
import Pencils from '../images/jess-bailey-l3N9Q27zULw-unsplash.jpg'
import "../App.css";
import './HomeLowerSection.css'

const HomeLowerSection = () => {
  return (
    <div className="lower-page">
      <Parallax className="lower-container" bgImage={Pencils} strength={300}>
        <div className="lower-content">
          <h1 className="img-text">Our Services</h1>
          <br />
          <ul className='lower-list'>
            <li>One Day Service/ Training with Ongoing Training and Shadowing Offered</li>
            <li>Materials</li>
            <li>Program Requirements</li>
          </ul>
        </div>
      </Parallax>
    </div>
  )
}

export default HomeLowerSection