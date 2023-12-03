import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar({ username }) {
  return (
    <NavbarStyled>
      nav
      <h1>Bonjour {username}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
}

export default Navbar;

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
`;
