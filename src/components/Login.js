import { Link } from 'react-router-dom'
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Titulo = styled.h1`
  color: #5B6356;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  font-size: 16px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

const Boton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0077cc;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #005fa3;
  }
`;

export default function Login() {
    const handleLogin = (event) => {
        event.preventDefault();

      };
    
      return (
        <LoginContainer>
          <Titulo>Pokedex</Titulo>
          <LoginForm onSubmit={handleLogin}>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Link to={'/inicio'}><Boton type="submit">Iniciar Sesión</Boton></Link>
          </LoginForm>
        </LoginContainer>
      );
}
