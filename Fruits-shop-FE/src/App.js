import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [adminControl, setAdminControl] = useState(false);

  const controlsAdmin = () => {
    setAdminControl(true);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            path="/fruits"
            element={<Home adminControl={adminControl} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
