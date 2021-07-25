import React from "react";
import productsModule from "../styles/products.module.scss";
const ProductList = ({title,description,features,price,isInLeft}) => {

   
               
               return (
               <>

                  <div className={`row align-items-center ${productsModule.__row}`}>
                     {isInLeft?(<>
                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 align-items-center">
                                    <img src={`/${title}.png`} className={`${productsModule.__left} ${productsModule.__productImage}`}/>
                     </div>
                     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                              <h2 className={`${productsModule.__productTitle}`}>{title}</h2>
                              <span className={`${productsModule.__productPrice}`}> MRP : ₹ {price}/- </span>
                              <div>
                                 <p className={productsModule.__productDescription}>{description}</p>
                                 <span className={productsModule.__productFeaturesTitle}>Features</span>
                                    {
                                       features.map((feature) => {
                                                      return <li className={productsModule.listItem}>{feature}</li>
                                       })
                                    } 
                              </div>
                              
                              
                              
                                 
                              
                     </div>
                     </>):(
                        <>
                        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 ${productsModule.SmImage} align-items-center`}>
                                       <img src={`/${title}.png`} className={`img-fluid ${productsModule.__productImage}`}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                                 <h2 className={`${productsModule.__productTitle}`}>{title}</h2>
                                 <span className={`${productsModule.__productPrice}`}> MRP : ₹ {price}/- </span>
                                 <div>
                                 <p className={productsModule.__productDescription}>{description}</p>
                                 <span className={productsModule.__productFeaturesTitle}>Features</span>
                                    {
                                       features.map((feature) => {
                                                      return <li className={productsModule.listItem}>{feature}</li>
                                       })
                                    } 
                              </div>
                                 
                                
                                   
                                 
                        </div>
                        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 ${productsModule.notSmImage}`}>
                                       <img src={`/${title}.png`} className={`${productsModule.__productImage} ${productsModule.__right}`}/>
                        </div>
                        
                        </>
                     )}
                  </div>
                  

               </>


               )


}

export default ProductList;