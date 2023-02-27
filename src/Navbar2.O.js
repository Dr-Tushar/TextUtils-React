import React from 'react';
import './App.css';

function Navbar2() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Hi, I'm [Your Name].</h1>
          <p>I'm a web developer based in [Your Location], and I love building beautiful, functional websites.</p>
          <a href="#contact" className="button">Get in Touch</a>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>[Insert a short bio about yourself and your web development experience.]</p>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <ul>
            <li>
              <a href="[Link to your project]">
                <img src="[Link to project image]" alt="[Project Name]" />
                <h3>[Project Name]</h3>
              </a>
            </li>
            <li>
              <a href="[Link to your project]">
                <img src="[Link to project image]" alt="[Project Name]" />
                <h3>[Project Name]</h3>
              </a>
            </li>
            <li>
              <a href="[Link to your project]">
                <img src="[Link to project image]" alt="[Project Name]" />
                <h3>[Project Name]</h3>
              </a>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <form action="[Your form submission endpoint]" method="post">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>Copyright © [Your Name] [Year]</p>
      </footer>
    </div>
  );
}

export default Navbar2;
