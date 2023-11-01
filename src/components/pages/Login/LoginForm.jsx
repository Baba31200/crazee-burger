import { useState } from "react";

function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  //Affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous </h1>
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
