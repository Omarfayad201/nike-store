import React from 'react'
import { useDispatch } from 'react-redux'
import { setClearCartItems, setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from '../../app/CartSlice.js';

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
    
    const dispatch = useDispatch();

    const onRemoveItem = ()=> {
        dispatch(setRemoveItemFromCart( { id, title, text, img, color, shadow, price, cartQuantity }));
    }
    const onIncreaseItemQTY = () => {
        dispatch(setIncreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
    }
    const onDecreaseItemQTY = ()=> {
        dispatch(setDecreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
    }
   
    return <>
        <div className="container  ">

<div className="row m-2 ">
                <div className={ `img-cart-items p-3 position-relative  col d-flex justify-content-center align-items-center rounded-3 ${color}`}>
                    <img className='w-100' src={img} alt="" />
                    <div className=" bg-black text-white position-absolute rounded-3 m-2  top-0 end-0 ">
                        <h6 className=' mt-2 px-1'>${price}</h6>
                    </div>
                   
                </div>
                
                    <div className="count   col p-3  d-flex flex-column align-items-center ">
                    <h4 className=' d-block mdi-ea fs-6 fw-bold'>{title} </h4>
                    <p className='mdi-ea fs-6'>{text}</p>
                    <div className="bottom-ico-last">
                        <button onClick={onDecreaseItemQTY} className=' bg-black border-0 px-1  text-white rounded-1 mdi-eaq'><i className="fa-solid fa-minus"></i></button>  
                        <button className='bg-black border-0 px-2  text-white rounded-1 mx-2'>{cartQuantity}</button>
                        <button onClick={onIncreaseItemQTY} className='bg-black border-0 px-1  text-white rounded-1 mdi-eaq'><i className="fa-solid fa-plus"></i></button>
                    </div>
                        
                </div>
                
                <div className="delet-items col-md-2  mt-1 d-flex justify-content-center align-items-center">
                    <div className="">
                        <h5 className='mdi-ea fs-6'> $ {price * cartQuantity} </h5>
                        
                    <button onClick={onRemoveItem} className='  bg-transparent border-0 '><i className="fa-solid fa-trash-can ms-4 text-danger"></i></button>
                    </div>
                    
                </div>
                

   </div>
        </div>
        
    </>
}

export default CartItem