import React from 'react'
import './Home.css'
import { TopBanner } from '../../Components/TopBanner/TopBanner'
import {Deals} from '../../Components/Home/Deals/Deals'
export const Home = () => {
  return (
    <div className='home_main'>  
    <TopBanner/>
    <Deals/>
    </div>
  )
}
