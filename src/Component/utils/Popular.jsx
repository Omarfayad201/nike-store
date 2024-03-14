// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { setAddItemToCart } from '../../app/CartSlice';
// const Popular = ({ endpoint}) => {
    
//     // console.log(endpoint);

//  const dispatch = useDispatch();

//     const onAddToCart = () => {
        
//         const item = { endpoint};
     
        
//         dispatch(setAddItemToCart(item));

//     }

//     return <>
//         <div className=" container-fluid mt-5  ">
//             <h1 className='title mb-5 '>{ endpoint.title}</h1>
//             <div className="row  justify-content-evenly ">

                
//                 {endpoint.items.map((ind, i) => <div key={i} className={ `coll-4   p-2 m-2 ${ind?.color} ${ind?.shadow}`}>
//                     <div className="all-content   w-100">

//   <div className="info-sales  w-100 text-light">
//                         <h3 className='font-3content '>{ind.title }</h3>
//                         <p>{ ind.text}</p>
//                     </div>
//                     <div className="price-rat w-50 d-flex">
//                         <div className="me-2 border-redo">
//                             <h4 className=' m-auto p-1 fs-6'>${ ind.price}</h4>
//                         </div>
                        
                    
//                         <div className=" trans-icons text-light ">
//                             <h4 className='fs-6 mdi-eaq m-auto'><i class="fa-solid fa-star me-1 fs-7  mdi-eaq"></i> { ind?.rating}</h4>
//                         </div>

//                     </div>
//                     <div className="buttons mt-3">
//                         <button onClick={()=> onAddToCart()} className=' btn btn-light me-2 mdi-eaq'><i class="fa-solid fa-basket-shopping"></i></button>
//                             <button className=' btn btn-light mdi-eaq '>{ ind?.btn}</button>
                            


//                         </div>

//                     </div>
                  


//                     <div className="img-3content">
//                         <img className='w-65' src={ind?.img} alt="img/nike" />
//                     </div>


// </div>)}
                





//             </div>



//     </div>
    
//     </>
// }

// export default Popular