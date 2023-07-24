import React from 'react'
import top from '../../Assets/topbanner/banner1.jpg'
import './TopBanner.css'
export const TopBanner = () => {
 
  return (
    <div className='topbanner_main'>
      <img src={top} alt="/" className='imag'/>
      <span className='topbanner_heading_section'>
      <p className='topbanner_heading'>Digital World</p>
      </span>
    </div>
    
  )
}
