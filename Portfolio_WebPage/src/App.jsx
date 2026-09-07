import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Myprojects from "./Components/Myprojects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <Header />
      <Hero />
      <Services />
      <Education />
      <Skills />
      <Myprojects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;