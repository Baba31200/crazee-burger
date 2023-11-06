import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();

    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  //Affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="entre votre prénom..."
        required
        value={inputValue}
        onChange={handleChange}
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}

export default LoginForm;
