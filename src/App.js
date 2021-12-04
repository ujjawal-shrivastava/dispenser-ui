import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Dispense, Home } from "./pages";
import { Helmet } from "react-helmet";
import data from "./data.json";
import Done from "./pages/Done";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path="dispense" element={<Dispense />} />
          <Route path="category" element={<Category />} />
          <Route path="done" element={<Done />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
