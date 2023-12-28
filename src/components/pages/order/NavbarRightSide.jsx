import styled from "styled-components";

import { Link } from "react-router-dom";

function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      right-side
      <h1>Bonjour {username}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarRightSideStyled>
  );
}

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  background: purple;
`;
