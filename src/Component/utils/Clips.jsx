import React from 'react'

const Clips = ({ clip, imgsrc}) => {
    return <>
        <div className="  overflow-hidden  group cursor-pointer tran-clips ">
           
           
             <div className=" h-32 position-relative rounded-5 ">
                
                <video autoPlay={true} loop={true} muted={true} playsInline={true} className='h-32 rounded-5  ' >
<source type='video/mp4' src={clip} />

                </video>
                
 <div className=" position-absolute top-0 start-0 end-0 bottom-0 z-img  h-28 ">
                    <img src={imgsrc} alt="img/clips" className=' h-28 insert-0 rounded-3 ' />
                    <div className="">
                         <i className="fa-solid fa-circle-play fa-2x position-icon trans-icon"></i>
                    </div>
                   
                
            </div>

</div>
            

    </div>
    
    </>
}

export default Clips