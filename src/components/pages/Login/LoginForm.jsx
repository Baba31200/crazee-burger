import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IoChevronForwardOutline } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";
import { authenticateUser } from "../../../api/user";
import Welcom from "./Welcom";

function LoginForm() {
  // state
  const [username, setUsername] = useState("Bob");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userReceived = await authenticateUser(username);

    setUsername("");
    navigate(`order/${userReceived.username}`);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  //Affichage
  return (
    <LoginFormSyled action="submit" onSubmit={handleSubmit}>
      <Welcom />
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />
        <Button
          label="Accéder à mon espace"
          Icon={<IoChevronForwardOutline />}
        />
      </div>
    </LoginFormSyled>
  );
}

const LoginFormSyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.logineLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-with-icon {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
      /* width: 100%; */
    }
    &::placeholder {
      background: white;
      color: lightgray;
    }
  }

  .input-login {
    margin: 18px 0;
  }
`;
export default LoginForm;
