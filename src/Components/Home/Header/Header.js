import React from 'react'
import './Header.css'
import logo from "../../../Assets/logo/86041_3352418_460660_image.png"
import myprofile from "../../../Assets/logo/icons8-male-user-30.png"
export const Header = () => {
  return (
    <div className='header_main'>
      <div className='header_search'>
        <i class="fa fa-bars menubar"></i>
        <img src={logo} alt="/" className='logo'/>
        <div  className="Search">
          <input className="Searchbox" type="text" placeholder="Search entire store here.."/>
          <span className='search_icon'> 
          <i class="fa fa-search"></i>
          </span>
        </div>

        <div className='myprofile'>
          <img src={myprofile} alt="/" />
          <span className='myprofiletext'>My Profile</span>
        </div>
      </div>
    </div>
  )
}
