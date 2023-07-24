import React from "react";
import { Products } from "../../Components/Home/SuggestProduct/Products";

import { useParams } from "react-router-dom";



// const queryParams = new URLSearchParams(window.location.search);
// const idvalue = queryParams.get('id');

// const id2 = 2;

// const variableOne = Products.filter(itemInArray => itemInArray.id === id2);
// console.log(variableOne[0].heading);


function Productinfo() {

    const {id} =useParams();



const variableOne = Products.filter(itemInArray => itemInArray.id === parseInt(id));
console.log(variableOne[0].heading);
const ProductHeading = variableOne[0].heading;
const ProductDescription = variableOne[0].description;
const ProductImage = variableOne[0].image;


// const variableOne = Products?.length && Products.filter(itemInArray => itemInArray.id === id);

//  console.log(variableOne[0].heading);
    
    return (
        
        <div className="Productinfo">

         1222 22
         <div className="Products_List_Section">
               
                <div className="Products_List">
                <div className="Product_details">
                    <div className="Product_img_section">
                    <div className="product_image">
                        <img src={ProductImage} alt="" className="Product_img" />
                    </div>
                    </div>
                    <div className="Product_heading">
                            {ProductHeading}
                            {/* <Link to="/Productinfo?id='"{...id.id} >{id.heading}</Link></div> */}
                           </div>

                    <div className="Product_description">
                    <span className="description">{ProductDescription}</span>
                       

                    </div>
                   
                </div>
                </div>
          
        </div>
        
        </div>
      );
  }
  
  export default Productinfo;