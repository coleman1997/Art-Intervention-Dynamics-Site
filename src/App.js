import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import BottomOfPage from "./components/BottomOfPage";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/sign-up" element={<Contact />}></Route>
        </Routes>
        <BottomOfPage />
      </Router>
    </>
  );
}

export default App;
