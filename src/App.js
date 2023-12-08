import Navbar from "./components/Layout/Nav/Navigation";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Benefits from "./components/Benefits/Benefits";
import Products from "./components/Products/Products";
import Process from "./components/Process/Process";
import Faq from "./components/FAQ/Faq";
import Contact from "./components/Contact/Contact";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Benefits />
      <Products />
      <Process />
      <Faq />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
