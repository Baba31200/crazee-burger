import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

function LoginPage() {
  //state

  //Comportement

  //Affichage
  return (
    <LoginPageStyled>
      <Logo />;
      <LoginForm />;
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background-color: green;

  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
`;
export default LoginPage;
