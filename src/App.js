import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Problem from "./pages/Problem";
import Team from "./pages/Team";
import Solution from "./pages/Solution";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/team" element={<Team />} />
          <Route path="/solution" element={<Solution />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
