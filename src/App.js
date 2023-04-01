import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";

function App() {

  const pokemons = useSelector(state => state.pokemons)

  console.log(pokemons);

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
