import React, { useEffect } from 'react'
import CartCount from './Cart/CartCount'
import CartEmpty from './Cart/CartEmpty'
import CartItem from './Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { SetCloseCart, selectCartItems, selectCartState, selectTotalAmount, selectTotalQTY, setClearCartItems, setGetTotals } from '../app/CartSlice.js'
import { join } from 'lodash'
const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState);
    const CartItems = useSelector(selectCartItems);
    // console.log(CartItems);
    const totalAmount = useSelector(selectTotalAmount);
    const totalQTY = useSelector(selectTotalQTY);

    useEffect(() => {
     dispatch(setGetTotals())
        
    },[CartItems, dispatch])

    const onCartToggle = () => { 
        dispatch(SetCloseCart({
    cartState: false
}))

    };

     const onClearCartItems = () => {
       dispatch(setClearCartItems())
    }

    return <>
        <div className={` position-fixed  top-0 end-0 start-0 bottom-0 blur-effect-theme z-3 ${ifCartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 visually-hidden'}`}>
            <div className="   position-absolute col-md-5 w top-0  end-0 bottom-0  blur-effect-theme-2  p">
                <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} /> 
                
                {CartItems.length === 0 ? <CartEmpty  onCartToggle={onCartToggle}/> : <div>
                    <div className="  my-2  ">
                        {CartItems?.map((item, i) => (
                            <CartItem key={i} item={item } />
                        ))}
                </div>
                
                </div>}

                 <div className=" mx-2  d-flex justify-content-center pos z-3 pb-2 mt-4">
                    <h4 className=' fs-5'>Total</h4>

                    <div className="bottom-check mt-3  ">
                        <p>Taxes and Shipping Will Calculate At Shipping</p>
                        <button className=' btn btn-dark w-100'>Check Now</button>
                    </div>
                    <div className="">
                        <h5 className=' bg-black py-1 px-3 rounded-2 fs-6 text-white'>{ totalAmount}</h5>
                    </div>
                    </div>
                
            </div>
            
           
          
    </div>
        
        
    </>
}

export default Cart