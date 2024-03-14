import React from 'react'

const FlexContents = ({highlight:{title, heading, text, btn, img, url}}) => {
    return <>
        <div className=" container   mt-5">
            
            <div className="row flex-wrap justify-content-between ">
            
                <div className="col-md-5   mb-5  ">
                    
<img className='w-100 rotate-highlight' src={img} alt="" />

                   </div>

<div className="col-md-5 ">
                    <div className="content-sneaker">

                        <h2 className='heading-sneaker '>{heading }</h2>
                        <h1 className='title-sneaker md-title-sn'>{ title}</h1>

                        <p>{text}</p>
                        <button className=' btn btn-dark box-sh-button'><a className=' text-decoration-none text-light' href={url}>{ btn}</a></button>



                    </div>
            </div>

</div>
  </div>
    </>
}

export default FlexContents