import { useState } from "react";

function LoginPage() {
  //state

  const [inputValue, setInputValue] = useState("");

  //Comportement

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
    <div>
      <h1>Bienvenue chez nous </h1>
      <br />
      <h3>Connectez-vous</h3>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="entre votre prénom..."
          required
          value={inputValue}
          onChange={handleChange}
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default LoginPage;
