import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <nav className="navbar">
          <div className="logo">Graniten Studio</div>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Web Development • Design • Digital Solutions</p>

          <h1>Modern websites and digital tools for small businesses.</h1>

          <p className="hero-text">
            I build clean, responsive and practical web solutions using modern
            technologies like React, TypeScript, C#, .NET and SQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <p className="section-label">Services</p>
        <h2>What I can help with</h2>

        <div className="grid">
          <article className="card">
            <h3>Websites</h3>
            <p>
              Modern, responsive websites for small businesses, local companies
              and personal brands.
            </p>
          </article>

          <article className="card">
            <h3>Frontend Development</h3>
            <p>
              User interfaces built with React, TypeScript, Vite and clean CSS.
            </p>
          </article>

          <article className="card">
            <h3>Backend Development</h3>
            <p>
              APIs, business logic and database-driven systems using C#, .NET
              and SQL.
            </p>
          </article>

          <article className="card">
            <h3>SEO Basics</h3>
            <p>
              Technical SEO setup with metadata, sitemap, robots.txt, Google
              Search Console and performance improvements.
            </p>
          </article>
        </div>
      </section>

      <section id="projects" className="section dark-section">
        <p className="section-label">Projects</p>
        <h2>Selected work</h2>

        <div className="project-list">
          <article className="project-card">
            <h3>Lillavitas Blommor</h3>
            <span>React • Vite • Tailwind • EmailJS • SEO</span>
            <p>
              A responsive website for a local flower shop with order inquiry,
              Google Maps integration and technical SEO setup.
            </p>
            <a
              className="project-link"
              href="https://lillavitasblommor.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </article>

          <article className="project-card">
            <h3>Mur & Bygg i Skutskär</h3>
            <span>React • Vite • CSS • SEO • Cloudflare Pages</span>
            <p>
              A company website for a masonry and construction business,
              focused on trust, local visibility and clear service presentation.
            </p>
            <a className="project-link coming-soon" href="#projects">
              Coming soon
            </a>
          </article>

          <article className="project-card">
            <h3>Free Online Tools</h3>
            <span>React • Vite • TypeScript • Cloudflare Pages</span>
            <p>
              A hub for free browser-based tools, built with performance,
              simplicity and SEO structure in mind.
            </p>
            <a
              className="project-link"
              href="https://freeonlinetools-4a9.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </article>

          <article className="project-card">
            <h3>QR Code Tools</h3>
            <span>React • TypeScript • QR Generation • SEO</span>
            <p>
              A free QR code tool that supports URLs, text, email, phone
              numbers, WiFi, vCards, events and more.
            </p>
            <a
              className="project-link"
              href="https://qr-code-tools.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </article>

          <article className="project-card">
            <h3>Barcode Generator</h3>
            <span>React • TypeScript • Barcode Formats • Validation</span>
            <p>
              A browser-based barcode generator supporting common formats such
              as CODE128, CODE39, EAN13, EAN8 and UPC.
            </p>
            <a
              className="project-link"
              href="https://barcode-generator-v2.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </article>

          <article className="project-card">
            <h3>Invoice Generator</h3>
            <span>React • TypeScript • jsPDF • LocalStorage</span>
            <p>
              A frontend invoice generator with invoice items, VAT calculation,
              currency selection, local storage and PDF export.
            </p>
            <a
              className="project-link"
              href="https://invoice-generator-2bu.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </article>

          <article className="project-card">
            <h3>Trading Profit Calculator</h3>
            <span>React • TypeScript • Trading Logic • SEO</span>
            <p>
              A trading calculator for profit and loss, leverage, fees, ROI,
              position size and account balance calculations.
            </p>
            <a
              className="project-link"
              href="https://trading-profit-calculator.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </article>
        </div>
      </section>

      <section id="about" className="section about">
        <div>
          <p className="section-label">About</p>
          <h2>Developer with practical business experience.</h2>
        </div>

        <p>
          My background combines software development with many years of
          practical experience from industry and business. I focus on building
          solutions that are simple to use, easy to understand and useful in
          real business situations.
        </p>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">Contact</p>
        <h2>Need a website or digital solution?</h2>
        <p>
          Contact me and tell me what you want to build. I can help with simple
          business websites, frontend development, backend systems and technical
          setup.
        </p>

        <a className="btn primary" href="mailto:graniten40@gmail.com">
          Email Graniten Studio
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Graniten Studio. All rights reserved.</p>

        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
        </div>
      </footer>
    </main>
  );
}

function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <Link to="/" className="back-link">
        ← Back to Graniten Studio
      </Link>

      <section className="legal-content">
        <h1>Privacy Policy</h1>

        <p className="legal-intro">
          This privacy policy explains how Graniten Studio handles basic
          information when you visit this website or contact me by email.
        </p>

        <div className="legal-block">
          <h2>Personal information</h2>
          <p>
            Graniten Studio does not collect personal information directly
            through this website. If you contact me by email, your email address
            and message will only be used to respond to your inquiry.
          </p>
        </div>

        <div className="legal-block">
          <h2>Analytics</h2>
          <p>
            This website may use basic analytics tools to understand website
            traffic, improve performance and see how visitors use the website.
            No sensitive personal information is intentionally collected.
          </p>
        </div>

        <div className="legal-block">
          <h2>External links</h2>
          <p>
            This website may contain links to external projects or third-party
            websites. Graniten Studio is not responsible for the privacy
            practices or content of those external websites.
          </p>
        </div>

        <div className="legal-block">
          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, you can contact
            Graniten Studio by email.
          </p>
        </div>
      </section>
    </main>
  );
}

function TermsOfUse() {
  return (
    <main className="legal-page">
      <Link to="/" className="back-link">
        ← Back to Graniten Studio
      </Link>

      <section className="legal-content">
        <h1>Terms of Use</h1>

        <p className="legal-intro">
          These terms describe how this website and its content may be used.
        </p>

        <div className="legal-block">
          <h2>Website content</h2>
          <p>
            The content on this website is provided for general information
            about Graniten Studio, services and projects.
          </p>
        </div>

        <div className="legal-block">
          <h2>Project links</h2>
          <p>
            Project links are provided as examples of previous work and may lead
            to external websites. Availability and content on external websites
            may change over time.
          </p>
        </div>

        <div className="legal-block">
          <h2>Use of content</h2>
          <p>
            You may not copy, misuse or redistribute content from this website
            without permission.
          </p>
        </div>

        <div className="legal-block">
          <h2>No guarantees</h2>
          <p>
            Graniten Studio aims to keep the information on this website
            accurate, but does not guarantee that all content is always complete,
            current or error-free.
          </p>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
    </Routes>
  );
}

export default App;