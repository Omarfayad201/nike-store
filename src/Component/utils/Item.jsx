import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setAddItemToCart, SetOpenCart } from '../../app/CartSlice.js';

const Item = ({ id, title, text, btn, color, shadow, img, rating, price }) => {

    // let itemsSlice = items.slice(3,12);
    
    //     let sliceItems = items.slice(0, 3);
    // console.log(items);

    const dispatch = useDispatch();

    const onAddToCart = () => {
        
        const item = {  id, title, text, btn, color, shadow, img, rating, price  };
     
        dispatch(setAddItemToCart(item));
    };

     const onCartToggle = () => { 
        dispatch(SetOpenCart({
    cartState: true
}))

    };
   

    return <>
        
    

      



        
                
                <div   className={` col-md-22   m-0 p-0 hov-wid m-3 rounded-4 ${color} ${shadow}`}>
                    <div className="content text-center glass    gap-2 rounded-4">
                        <div className="info-content ">
                            <h2 className=' fs-9 text-light '>{title}</h2>
                            <p className='text-light'>{text}</p>
                            
                            <div className="  d-flex d-flex justify-content-center text-center  x-trns ">

<div className="price-content d-flex justify-content-center text-center    ">
                                <h6 className=' bg-light d-flex justify-content-center align-items-center   px-1  rounded-3 me-3 f-11 '>${price}</h6>
                                <div className="rounded-3 rat d-flex  w-100 ">
                                    <i className="fa-solid fa-star me-1 fs-11 text-light fs-i "></i>
                                    <h4 className='mrg-rating h6 text-light fs-i'>{rating}</h4>
                                </div>
                              
                            </div>

                            </div>
                            
                            
                            <div className=" ms-1 d-flex justify-content-center w-100">
                                <button onClick={()=> onAddToCart()} className=' btn btn-light me-2 button-bay'><i className="fa-solid fa-bag-shopping"></i></button>
                                <button onClick={()=> {onAddToCart(); onCartToggle();}}   className=' btn btn-light button-bay'>{btn }</button>

                                </div>
                            
                    </div>
                    
                        <div className="img-content  p-4 mt-4">
                            <img src={img} className=' w-100  img-md' alt="img/nike" />
                            
                    </div>
                    
                    </div>        
                    

                        </div> 




    
    </>
}

export default Item