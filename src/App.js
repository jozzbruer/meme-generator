import React from 'react';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator';
import './App.css'
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <br />
      <Footer />
      <br />
    </div>
  );
}

export default App;
