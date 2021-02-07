import React from 'react';
//import Navbar from "./components/Navbar"; don't uncomment this if it's working properly
 import {BrowserRouter as Router} from 'react-router-dom';
 import Products from './components/Products';
import {productData,productDataTwo} from './components/Products/data.js';
import Feature from './components/Feature';
import Footer from './components/Footer'
import {GlobalStyle} from  './globalStyles'
import Hero from './components/Hero'


function App (){

  return(
    <Router>
     <GlobalStyle/>
      
     <Hero/>
  
    <Products heading = 'Choose your favorite' data={productData}/>
   
     <Feature/>
    
     <Products heading = 'Sweet Treats for You' data={productDataTwo}/>
    
    <Footer/>
    
    </Router>
  )
}

export default App;


/* this was how it was before

 return(
  <Router>
   <GlobalStyle/>
    
   <Hero/>

   <Products heading = 'Choose your favorite' data={productData}/>
 
  <Feature/>
  
  <Products heading = 'Sweet Treats for You' data={productDataTwo}/>
  
  <Footer/>
  
  </Router>
)

*/