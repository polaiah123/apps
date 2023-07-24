import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Deals.css'
import { useParams } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import deals from '../../../Components/Home/Deals/json'
// import backimg from '../../../Assets/Deals/back.png'
// import like from '../../../Assets/Deals/like.png'
// import dislike from '../../../Assets/Deals/dislike.png'
// import heart from '../../../Assets/Deals/heart.png'
// import rating from '../../../Assets/Deals/rating.jpg'
import sale from '../../../Assets/Deals/icons8-sale.gif'
//import Pd from '../../../Components/Home/Deals/ProductDetails/Pd'
export const Deals = () => {
    // const [details, setdetails] = useState(false)
    // const content = (value) => {
    //     setdetails(value)
    // }
    const {id} =useParams();
    const datafetching = deals.filter(user => user.id === parseInt(id));
    console.log(datafetching)
    const dealscost = datafetching[0].cost;
    // const dealsimage = datafetching[0].image;
    // const detils = datafetching[0].details;
    // const [first, setfirst] = useState(true)
    return (
        <div className='deals_main'>
            <div className='deals_heading'>
                <p className='heading'>Deal's Of the Day</p>
            </div>
            <div>
                {dealscost}
                </div>
                {/* <img src={dealsimage} alt="/"/> */}
            
            {/* {first && */}
                {/* <div className='deals_content'>
                    {deals.map((user) => (
                        
                        <li key={user.id}
                            // onClick={() => {
                            //     content(user.id);
                            // }}
                            >
                            <div className="deals_user">
                            
                            <img src={sale} alt="" className='sale' />
                            <Link to={`/productdetails/${user.id}`} className='link'>
                                <img onClick={content}
                                    src={user.image} alt="/" className='image' />
                                     </Link>
                                <span className='product_name'>{user.details}</span>
                                <span className='cost'>{user.cost}</span>
                            </div>
                        </li>
                       
                    ))}
                </div> */}
            {/* } */}
            {/* {details   &&   (
                <>
                    {deals.map((user) => (
                        <div key={user.id}>
                            {user.id === details && (
                                <div className='deals_detail_section'>
                                    <div className='image_section'>
                                        <img src={user.image} alt="" className='product_image' />
                                    </div>
                                    <div className='product_details'>
                                        <span className='brand_name'>
                                            <span className='details'>{user.details}</span>
                                            <img src={rating} alt="" className='rating' />
                                        </span>
                                        <span className='cost'>{user.cost}</span>
                                        <span className='description'>{user.description1}</span>
                                        <span className='description'> {user.description2}</span>
                                        <span className='description'>{user.description3}</span>
                                        <span className='description'>{user.description4}</span>
                                        <span className='description'>{user.description5}</span>
                                        <span className='likes_section'>
                                            <img src={like} alt="" className='like' />
                                            <img src={dislike} alt="" className='like' />
                                            <img src={heart} alt="" className='like' />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                    ))}
                    <span className='back_section'>
                        <img src={backimg} alt="/" className='back' onClick={goback} /><span>Go Back</span>
                    </span>
                </>
            )} */}
        {/* {details && <Pd data1={details}/>} */}
        </div>
    )
}
