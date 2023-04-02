import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/inicio" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
