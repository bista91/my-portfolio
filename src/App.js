import React from 'react';
import './App.css'; // Import your CSS file
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Sundari Bista. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;