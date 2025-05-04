import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import ProblemSolution from "./pages/ProblemSolution";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/problem-solution" element={<ProblemSolution />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
