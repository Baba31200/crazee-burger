import styled from "styled-components";
import Profile from "./Profile";

function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <div className="admin-button">button Admin</div>
      <Profile />
    </NavbarRightSideStyled>
  );
}

export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: yellow;
  } */

  .profile {
    background: #2bcde2;
  }
`;
