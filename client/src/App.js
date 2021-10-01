import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <NavBar />
      {/* <AboutMe /> */}
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
