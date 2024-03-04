import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

function LoginPage() {
  //state

  //Comportement

  //Affichage
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"} />;
      <LoginForm />;
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  /* background-color: green; */

  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: "";
    background: url("/images/burger-and-fries-background.jpg")
      rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .logo-login-page {
    transform: scale(2.5);
  }
`;
export default LoginPage;
