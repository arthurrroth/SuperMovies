import React from 'react'
import "./LandingPage.css"
import LandingImage1 from '../../assets/img/home.png'
import LandingImage2 from '../../assets/img/description.png'
import Ellipse from '../../assets/icons/Ellipse';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div>
        <img className='LandingImage1' src={LandingImage1} alt="#" />
        <img className='LandingImage2' src={LandingImage2} alt="#" />
      </div>

      <div className="BackGround">
        <div className='ellipsesvg1'>
        <Ellipse />

        </div>
      </div>
      
      <div className="LandingDiv">
        <h2>Enjoy Your Movie</h2>
        <h2>Watch Everywhere</h2>
        <div className='LandingP'>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
        </div>
          <button className="LandingButton">Get Started</button>
      </div>
    </div>
  )
}



export default LandingPage