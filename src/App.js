import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Jumbo from './components/JumboGreeting/JumboGreeting';
import Footer from './components/Footer/Footer';
import MainArea from './components/MainArea/main';

function App() {
  
    return (
      <div className="appSite">
        <NavBar />
        <div className="siteContent">
          <div className="appHeader">
          </div>
          <div className="main">
          <Jumbo />
          <MainArea />
          </div>
        </div>  
        <Footer />
      </div>  
      
    );
}


export default App;
