
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Brooks Strategic Solutions</h1>
        <nav>
          <a href="#services">Services</a> | 
          <a href="#about">About</a> | 
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="services">
          <h2>Our Services</h2>
          <p>Medicare, Life, Health, and Property & Casualty Insurance Solutions.</p>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Empowering your future, one solution at a time.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Call us at 888-416-7563 or email info@brooksstrategicsolutions.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;
