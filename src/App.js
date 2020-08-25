import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Trends from './components/Trends/Trends';
import Brands from './components/Brands/Brands';
import Showcase from './components/Showcase/Showcase';

import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

import styled from 'styled-components';

const StackingContext = styled.div`
position: relative;`;



function App() {
  return (
    <div className="App">
      <Header/>
      <Trends/>
      <Brands/>
      <StackingContext>

        <Showcase/>
        <Newsletter/>
      </StackingContext>

      <Footer/>
    </div>
  );
}

export default App;
