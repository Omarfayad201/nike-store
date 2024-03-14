
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { SetOpenCart, selectTotalQTY } from '../app/CartSlice';


const Navbar = () => {


    const [navState, setNavState] = useState(false);
    
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);

    const onCartToggle = () => { 
        dispatch(SetOpenCart({
    cartState: true
}))

    };

    const onNavScroll = () => {
    
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll',
            onNavScroll);
        return () => {
            window.removeEventListener('scroll',
                onNavScroll);
        }
    }, []);
   
    

    return <>
        <header >
            <nav className={!navState ? 'icon-nav' : 'icon-nav-cng'}>

                <div className="d-flex justify-content-between align-items-center p-3">

                    <div className="col-md-1 logo-nav">
                        
<img className= 'w-50'   src={  logo} alt="" />


                    </div>
                    
                    <div className="content-nav  w-25 d-flex justify-content-end ">
                        
                        <ul className=' list-unstyled d-flex ul-nav ms-auto align-items-center '>
                            <li><i className="fa-solid fa-magnifying-glass fs-5"></i></li> 
                            <li><i className="fa-regular fa-heart fs-5"></i></li>
                            <li><button onClick={onCartToggle} className={! navState ? 'bg-transparent  border-0 position-relative btn-color' : 'bg-transparent  border-0 position-relative btn-color-cng'} type='button' ><i className="fa-solid fa-bag-shopping fs-5 "></i>
                                <div className={!navState ? 'cont-nav-cng ' : 'cont-nav'}>{ totalQTY}</div>
                            </button></li> 

                        </ul>


                        </div>





                </div>




            </nav>

            
    </header>
    
    </>
}

export default Navbar