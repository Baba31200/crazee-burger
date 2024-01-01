import styled from "styled-components";
import Profile from "./Profile";

function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">button Admin</div> */}
      <Profile username={username} />
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
    background: yellow;
  }
`;
