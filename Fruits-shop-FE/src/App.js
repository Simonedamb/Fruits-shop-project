import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/fruits" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
