
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

import styles from "./App.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Return Home</a>
    </div>
  );
}

function App() {
  return (
    <div className={styles.app}>
      <ScrollToTop />

      <Navbar />

      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
