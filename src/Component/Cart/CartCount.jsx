import React from 'react'

const CartCount = ({onCartToggle,onClearCartItems, totalQTY}) => {
    return <>
        
        <div className=" d-flex  justify-content-between px-2  border border-1 border-bottom align-items-center">
            <div className=" d-flex">
                <div className=" pe-3  pt-2"><button onClick={onCartToggle} className=' bg-transparent border-0 tr-arrow '><i className="fa-solid fa-chevron-left  tr-arrow"></i><i className="fa-solid fa-chevron-left"></i></button></div>
            </div>
            <div className=" pt-2"><h5 className=' fw-bold fs-md '>Your cart <span className=' fs-md bg-black px-2 rounded-3 text-light fs-6'>({ totalQTY} Items)</span></h5></div>

            <div className="bg-b-x rounded-2 g  d-flex justify-content-center align-content-center me-3 ">
                <button onClick={onClearCartItems} type='button'  className=' bg-transparent fs-6 border-0  mdi-eaq'>
                    <i className="fa-solid fa-x text-light font-icon-x fs-i"></i>
                </button>
</div>
   </div>
    </>
}

export default CartCount