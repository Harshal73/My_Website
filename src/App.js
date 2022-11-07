import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
     <NavBar/>
     <Home />
     <About/>
     <Portfolio/>
     <SocialLinks/>
     <Contact/>
    
    </div>
  );
}

export default App;
 