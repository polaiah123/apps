import React from 'react'
import './Footer.css'
import logo from '../../../Assets/logo/86041_3352418_460660_image.png'
export const Footer = () => {
  return (
    <div className='footer_main'>
            <div className="footer_up">
                <div className="footer_address_block" >
                     <img src={logo} alt="/" className='logo1'/>
                    <p className="address"><i class="fa fa-map-marker" ></i> 184 Main Rd E, St Albans VIC 3021, Australia</p>
                    <p className="mail"><i class="fa fa-envelope-o"></i>brand@domain.com</p>
                    <p className="contact"><i class="fa fa-phone"></i> +01 2345678</p>
                </div>
                <div className='footer_left'>
                    <p className='footer_left_heading'>Categories</p>
                    <p className="footer_left_list">Mobiles</p>
                    <p className="footer_left_list">Laptops</p>
                    <p className="footer_left_list">Accessories</p>
                    <p className="footer_left_list">Gadgets</p>
                    <p className="footer_left_list">Gaming</p>
                    <p className="footer_left_list">Electronic</p>

                </div>
                <div className="footer_middle" >
                    <p className="footer_middle_heading">Information</p>
                    <p className="footer_middle_list">About Us</p>
                    <p className="footer_middle_list">Contact Us</p>
                    <p className="footer_middle_list">Terms & Conditions</p>
                    <p className="footer_middle_list">Returns & Exchanges</p>
                    <p className="footer_middle_list">Shipping & Delivery</p>
                    <p className="footer_middle_list">Privacy & Policy</p>
                </div>
                <div className="footer_right">
                    <p className="footer_right_heading">Quick Links</p>
                    <p className="footer_right_list">Store Location</p>
                    <p className="footer_right_list">My Account</p>
                    <p className="footer_right_list">Accessories</p>
                    <p className="footer_right_list"> Orders Tracking</p>
                    <p className="footer_right_list"> Size Guide</p>
                    <p className="footer_right_list">FAQs</p>
                </div>
            </div>
            <div className="copyright">
                <p class="copyright-p">Copyright © 2017. All rights reserved. Powered by NITS</p>
            </div>

        </div>
  )
}
