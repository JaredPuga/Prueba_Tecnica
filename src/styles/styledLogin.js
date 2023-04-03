import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const Titulo = styled.h1`
  color: #000000;
  letter-spacing: 5px;
  font-size: 50px; 
  font-family: 'Pokemon Solid', sans-serif;
`;

export const LoginForm = styled.form`
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

export const Input = styled.input`
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

export const Boton = styled.button`
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