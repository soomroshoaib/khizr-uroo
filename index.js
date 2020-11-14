import React from 'react';
import ReactDom from 'react-dom'; 
import Header from  './Header';
import Home from './Home';

import './index.css';
import './App.css';
import './Prop.css';
import Aditem from './Aditem';
import  Footer from './Footer'






ReactDom.render(
  <>
  
  
  
    <Header />
    <Home />
      <Aditem />
      <Footer />
      
  
  </>,
  document.getElementById('root')
);

