import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">left-side</div>
      <NavbarRightSide username={username} />
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
`;
