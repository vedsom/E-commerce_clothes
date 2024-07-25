import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.jpg'
import hero_img from '../Assets/hero_img.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals Only</h2>
            <div>
            <div className='hero-hand-icon'>
                <p>Latest</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>Styles</p>
            <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collections</div>
                {/* <img src={arrow_icon} alt=''/> */}
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt=''/>
        </div>

    </div>
  )
}
