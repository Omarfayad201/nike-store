import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'
// import Popular from './Component/utils/Popular';

const Sales = ({ifExists, endpoint: {title, items}}) => {
    // console.log(items);
    return <>
        <div className="  ">
              <Title title={title} />
           
            <div className="   ">
                
<div className={`d-flex  flex-wrap justify-content-center  ${ifExists? ' border border-2 border-bottom  bg-ani    justify-content-evenly ' : '    '}`}>
               
                {items?.map((item, i) => (
                    <Item  {...item} key={i} />
                ))}


                {/* <Item items={items} />    */}

            </div>

           </div>
            

    </div>
    
    </>
}

export default Sales