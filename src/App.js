import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contacts";
import Navbar from "./components/Navbar";
import SystemStyles from "./styles/globalStyle.styles";

function App() {
  return (
    // Defining Router
    <Router>
      <SystemStyles />
      <Navbar />
      {/* Pages to navigate to.(Routes) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
