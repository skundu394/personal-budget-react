import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import PieChart from './Budget/PieChart';

function App() {
  return (
    <Router >
     <Menu/>
     <Hero/>
     <div className="mainContainer">
      <switch>
        <Routes>
          <Route  path="/about" element={<AboutPage/>}/>
          <Route  path="/login" element={<LoginPage/>}/>
          <Route  path="/" element={<HomePage/>}/>
        </Routes>
      </switch>
    </div>
     <PieChart/>
     <Footer/>
    </Router>
  );
}

export default App;
