import React from 'react';

import './Prop.css';
import './App.css';
import { BrowserRouter, Ruter, Link } from 'react-router-dom';


import Header from  './Header';

import './index.css';

import Home from './Home';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Ruter />
    </BrowserRouter>
  
  );
}

export default App;
<Link  className="color fontb s16 noulh noul">sigin in</Link>