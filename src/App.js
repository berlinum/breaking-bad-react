import React from 'react';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Quote />
      </main>
    </div>
  );
}

export default App;
