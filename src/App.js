import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Trends from './components/Trends/Trends';
import Showcase from './components/Showcase/Showcase';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Trends/>
      <Showcase/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
