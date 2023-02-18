import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Items from "./components/items/Items";
import Scanner from "./components/scanner/Scanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/items" element={<Items />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
