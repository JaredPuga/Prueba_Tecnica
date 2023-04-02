import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PokemonPage from "./components/PokemonPage";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/inicio" element={<Home />}></Route>
        <Route exact path="/pokemon/:id" element={<PokemonPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
