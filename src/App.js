import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Problem from "./pages/Problem";
import Team from "./pages/Team";
import Solution from "./pages/Solution";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen text-gray-800">
        <Navbar />
        <Routes>
        <Route path="/" element={<Layout><Home /> </Layout>} />
          <Route path="/about" element={<Layout><About /> </Layout>} />
          <Route path="/problem" element={<Layout><Problem /> </Layout>} />
          <Route path="/team" element={<Layout><Team /> </Layout>} />
          <Route path="/solution" element={<Layout> <Solution /> </Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
