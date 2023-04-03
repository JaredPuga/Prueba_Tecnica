import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Boton,
  Dissabled,
  Input,
  LoginContainer,
  LoginForm,
  Titulo,
} from "../styles/styledLogin";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth, changeName } from "../features/auth/authSlice";

export default function Login() {
  const [nameValue, setNameValue] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(true);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const verificar = nameValue !== "" && password !== "";

  useEffect(() => {
    const value = localStorage.getItem("isAuth");
    if (!value) {
      localStorage.setItem("isAuth", false);
    }
  }, []);

  useEffect(() => {
    setEnable(!verificar);
  }, [nameValue, password, verificar]);

  useEffect(() => {
    if (auth.value === "true") {
      <Navigate to={"/inicio"} />;
    }
  }, [auth.value]);

  if (auth.value === "true") {
    return <Navigate to={"/inicio"} />;
  }

  const handleLogin = (event) => {
    event.preventDefault();
  };

  const handleAuth = () => {
    dispatch(changeAuth(true));
    dispatch(changeName(nameValue));
  };

  return (
    <LoginContainer>
      <Titulo>Pokedex</Titulo>
      <LoginForm onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          autoComplete="off"
          required
          onChange={(e) => setNameValue(e.target.value)}
        />
        <Input
          type="password"
          autoComplete="off"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {!enable ? (
          <Link to={"/inicio"}>
            <Boton type="submit" disabled={enable} onClick={handleAuth}>
              Iniciar Sesión
            </Boton>
          </Link>
        ) : (
          <Dissabled>Iniciar Sesión</Dissabled>
        )}
      </LoginForm>
    </LoginContainer>
  );
}
