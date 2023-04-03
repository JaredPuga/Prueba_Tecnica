import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/Login";
import Home from "./components/Home";
import PokemonPage from "./components/PokemonPage";
import NotFound from "./components/NotFound";
import './App.css'

function App() {

  const auth = useSelector(state => state.auth)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/inicio" element={
          <PrivateRoute auth={auth} >
            <Home />
          </PrivateRoute>
        }/>
        <Route exact path="/pokemon/:id" element={<PokemonPage />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
