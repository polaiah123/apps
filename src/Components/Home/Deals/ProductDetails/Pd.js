import React from 'react'
import deals from '../../../../Components/Home/Deals/json'
import backimg from '../../../../Assets/Deals/back.png'
import like from '../../../../Assets/Deals/like.png'
import dislike from '../../../../Assets/Deals/dislike.png'
import heart from '../../../../Assets/Deals/heart.png'
import rating from '../../../../Assets/Deals/rating.jpg'

 const Pd = () => {
    // const [back, setback] = useState(false)
    // const goback =() => {
    //     setback(true)
    // }
  return (
      <>
    <div>
         {/* {data1   &&   ( */}
                <>
                    {deals.map((user) => (
                        <div key={user.id}>
                            {/* {user.id === deals  && ( */}
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
                            {/* )} */}
                        </div>

                    ))}
                   
                </>
            {/* )} */}
    </div>
    {/* <span className='back_section'>
    <img src={backimg} alt="/" className='back' onClick={goback} /><span>Go Back</span>
   </span>  */}
</>
  )
}
export default Pd;