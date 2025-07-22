import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./styles/globalStyle.styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { useTheme } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/Abouts";
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
