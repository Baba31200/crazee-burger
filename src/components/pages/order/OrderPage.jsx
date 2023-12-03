import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function OrderPage() {
  const { username } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          nav
          <h1>Bonjour {username}</h1>
          <br />
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className="main">main</div>
      </div>
    </OrderPageStyled>
  );
}

export default OrderPage;

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: yellow;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .navbar {
      background: blue;
      height: 10vh;
    }

    .main {
      background: green;
      /*  */
      flex: 1;
    }
  }
`;
