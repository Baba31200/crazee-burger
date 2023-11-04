import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
      <br />
      <Link to="/">
        <button>Retourner à la page dacceuil</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
