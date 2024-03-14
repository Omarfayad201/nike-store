import React from 'react'
import Slider from "react-slick";
import { truncate } from 'lodash';

const Stories = ({ story:{title, news} }) => {
   


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
        breakpoint: 600,
       responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
    };

    return <>
    
       <div className='  container w90  mt-5  pt-3 my-5'>
            <h2 className='title-sneaker'>{ title}</h2>
        <Slider className='py-3 ' {...settings}>
                {news.map((news, i) => <div key={i} className=" mx-2">
                <div className="content-story mx-3 box-shadow-story rounded-3">
       <img className='w-100  rounded-top-3' src={news?.img} alt="" />
                    <div className="story-md d-flex justify-content-between  p-2">
                        <div className="icon-heard d-flex justify-content-center  ">
                            <i className="fa-solid fa-heart heard-icon me-1"></i>
                            <p className=' fs-6'>{news?.like } </p>
                        </div>
                        <div className="hour-md d-flex">
                            <i className="fa-regular fa-clock me-1"></i>
                                <p className='p-story'>{news?.time}</p>
                        </div>
                            <p className='by-story'>#{news?.by}</p>

                    </div>
                        <div className="text-story p-3">
                            <h3 className=' title-story-md'>{news?.title.split(' ').slice(0 ,2).join('')}</h3>

                        <p className=' text-story-md'>{truncate(news.text, {length: 175}) }</p>
                    </div>
                        

                    <div className="bottom p-3">
                            <button className='btn btn-dark w-100'><a className=' text-decoration-none text-light' href={news?.url}>{news?.btn }</a></button>
</div>
                </div>


</div>)}
        </Slider>
            
           

      </div>
        
    
    </>
}

export default Stories