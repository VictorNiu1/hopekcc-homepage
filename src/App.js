import React from 'react';
import './App.css';
import backgroundImage from './assets/background.jpg';
import overlayImage from './assets/robot.png';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to HopeKCC</h1>
      </header>
      <nav>
        <a href="#Home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#opportunities">Opportunities</a>
        <a href="#contact">Contact</a>
        <a href="#login">Login</a>
      </nav>
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={overlayImage} alt="Overlay" className="overlay-image" />
      </main>
      <footer>
        <p>&copy; 2024 HopeKCC</p>
      </footer>
    </div>
  );
}

export default App;
