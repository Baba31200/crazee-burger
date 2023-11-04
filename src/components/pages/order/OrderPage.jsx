import { Link } from "react-router-dom";

function OrderPage() {
  return (
    <div>
      <h1>Orderpage</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

export default OrderPage;
