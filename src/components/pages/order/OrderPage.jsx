import { Link, useParams } from "react-router-dom";

function OrderPage() {
  const { username } = useParams();
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

export default OrderPage;
