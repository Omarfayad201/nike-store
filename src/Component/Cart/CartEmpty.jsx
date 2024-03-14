import React from 'react'
import empty from '../../assets/emptybag.png'
const CartEmpty = ({ onCartToggle }) => {
    return <>
        
        <div className="container  d-flex justify-content-center align-items-end  h-50">
            <div className="w-25">


<img className=' w-100 img-ho-empty' src={empty} alt="" />
                <button onClick={onCartToggle} className='bg-btn-empty border-0 px-2 py-1 rounded-3 mt-3 f-md'><i className="fa-solid fa-arrow-left-long arrow-empty f-md"></i> back to nike store</button>


            </div>

</div>
        
    </>
}

export default CartEmpty