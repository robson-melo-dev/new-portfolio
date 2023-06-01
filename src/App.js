import Header from "sections/Header";
import "./App.scss";
import Hero from "sections/Hero";
import Experience from "sections/Experience";
import Projects from "sections/Projects";
import Contact from "sections/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      {/* <Building /> */}
    </div>
  );
}

export default App;
