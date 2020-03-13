import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Card />
        <div className="btn__container">
          <Button class="btn" title="White" />
          <Button class="btn" title="Jesse" />
        </div>
      </main>
    </div>
  );
}

export default App;
