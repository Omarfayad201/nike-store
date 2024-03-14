import React from 'react'

const FlexContent = ({ sneaker: { url, heading, title, text, btn, img } }) => {
    
    // console.log(title);
    return <>
        <div className=" container mt-5 w90">
            
            <div className="row flex-wrap justify-content-between ">
                

                <div className="col-md-5">
                    <div className="content-sneaker">

                        <h2 className='heading-sneaker '>{heading }</h2>
                        <h1 className='title-sneaker md-title-sn'>{ title}</h1>

                        <p>{text}</p>
                        
                        <button className=' btn btn-dark box-sh-button'><a className=' text-decoration-none text-light' href={url}>{ btn} </a></button>



                    </div>
            </div>

                <div className="col-md-5  mt-4 ">
                    
<img  className='w-100 rotate-sneaker' src={img} alt="" />

                   </div>








</div>
  </div>
    </>
}

export default FlexContent