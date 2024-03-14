import React from 'react'

const Footer = ({ footerAPI:{links, titles} }) => {
    
    return <>
        <footer className='bg-theme py-5  '>
            <div className="d-flex justify-content-center align-items-center">
                
 <div className="col-md-5 text-light  ">
                <div className="title-footer  d-flex  justify-content-evenly">

                    {titles.map((val, i) => (
                    <div key={i} className="">
                    <div className="    text-center ">
                                
                                <h3 className='trans-footer title-footer-md'>{val.title}</h3>
                                                        
                            </div>
</div>
                        
                    ))}
                </div>
                       
                <div className="links-footer d-flex justify-content-evenly  ">
                    
                    {links.map((list, i) => (
                                
                    <ul className='  list-unstyled' key={i}>
                        {list.map((liList, i) => (
                            <li className=' links-footer-md' key={i}>{liList.link}</li>
                        ))}
                    
                        </ul>
      ))}           
</div>
                           
            
            
        </div>   

                            </div>
           
            <div className="p-footer text-center pt-5">
                <p className=' text-light '>Copyright© All Reserved Rights JSSTACK DEVELOPERS 2023</p>
            </div>


    </footer>
        
        
    </>
}

export default Footer