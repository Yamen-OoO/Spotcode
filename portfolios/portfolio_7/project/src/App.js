import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Portfolio from './pages/portfolio'
import News from './pages/news'
import Contact from './pages/contact'
import ColorSwitcher from "./componets/colorSwitcher";
import GoToTop from "./scripts/gototop";




import './styles/library.css'
import './styles/base.css'
import Copyright from "./componets/copyright";



function App() {
  return (
    <div>
      <Navbar />
      <ColorSwitcher />
      <GoToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
