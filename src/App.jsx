import Header from "./Components/Header/Header";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Company from "./Components/Companies/Company";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" /> <Header />
        <Hero />
      </div>
      <Company />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
