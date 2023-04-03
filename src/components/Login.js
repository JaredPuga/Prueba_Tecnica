import { Link } from 'react-router-dom'
import { Boton, Input, LoginContainer, LoginForm, Titulo } from '../styles/styledLogin';

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
