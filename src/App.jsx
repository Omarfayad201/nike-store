import React from 'react';
import { Cart, FlexBox, FlexContent, FlexContents, Footer, Hero, Navbar, Sales, Stories } from './Component';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI, } from './data/data.js';
export default function App() {
  return <>
    <Navbar />
    <Cart/>
    <main className=' d-flex flex-column gap-5 position-relative'>
      <Hero heroapi={heroapi} />
      {/* <Sales endpoint={popularsales}  ifExists/> */}
      {/* <Popular endpoint={popularsales} /> */}

      
      <Sales endpoint={popularsales} ifExists />
      <FlexContents highlight={highlight} />
      
      <Sales endpoint={toprateslaes} />

     

      <FlexContent sneaker={sneaker} />
      <Stories story={story} />
      <FlexBox />
      
    </main>
         <Footer footerAPI={footerAPI } />
  </>
}
