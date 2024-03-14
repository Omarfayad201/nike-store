import React from 'react'
import Clips from './utils/Clips'
import SocialLink from './utils/SocialLink'

const hero = ({ heroapi:{title, subtitle, img, btntext, sociallinks, videos}}) => {
    // console.log(heroapi);
    return <>
        <div className=" position-relative h-auto w-auto d-flex flex-column">
            <div className=" col-lg-11 col-md-9 col-sm-7 w-auto position-absolute height top-0 start-0 end-0 opacity-100 z-1 clip-path bg-theme"></div>

            <div className=" position-relative opacity-100 z-2   m-auto    w-90 ">

                
                <div className="text-center  w-100 "> 
                    
                    <div className="mt-5 pt-5 ">

                        <h1 className=' text-h1  my-5'>{title}</h1>
                    <h1 className='  text-h1'>{subtitle }</h1>
                    <button type='button transform-logo' className=' btn btn-outline-light mrg-home  rounded-pill'>{btntext}</button>
                    
                    </div>
                    
                      
                    <div className="w-25 mb-5  ms-4 trans">
                        {videos?.map((val, i) => (
                            <Clips key={i} imgsrc={val.imgsrc} clip={val.clip } />  
                        )) }
                    </div>
                    <div className="  position-absolute end-0 top-50   d-flex flex-column">
                        {sociallinks?.map((val, i) => (
                            <SocialLink
                            key={i}

                                icon={val.icon}

                            />
                        ))}
                    </div>
</div>
                <div className=" d-flex justify-content-center align-items-center transform-logo  mt-4">
                    <img  src={img}  className='w-30' alt='hero-img/img'  />
                    
</div>

            </div>

    </div>
    
    </>
}

export default hero