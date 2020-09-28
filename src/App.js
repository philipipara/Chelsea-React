import React from 'react';
import './App.css';
import Content from './Components/Content';
import Navigation from './Components/Navbar';
import MyCarousel from './Components/Carousel';



function App() {
  return (
    <div className="App">
      <Navigation />
      <MyCarousel />
      <Content />
    </div>
  );
}

export default App;
