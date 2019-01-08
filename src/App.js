import React from 'react';
import './App.css';


import Footer from './components/Footer/Footer';
import MainGame from './components/MainArea/main';

function App(props) {
  
    return (
      <div className="appSite">
        
          <div className="main">
          
          <MainGame />
          </div>
        
        <Footer />
      </div>  
      
    );
}


export default App;
