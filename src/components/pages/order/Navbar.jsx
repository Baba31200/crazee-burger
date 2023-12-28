import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">left-side</div>
      <div className="right-side">
        right-side
        <h1>Bonjour {username}</h1>
        <br />
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  .left-side {
    background: gold;
  }

  .right-side {
    background: purple;
  }
`;
