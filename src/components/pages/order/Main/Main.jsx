import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Amin</div>
      </div>
    </MainStyled>
  );
}

export default Main;

const MainStyled = styled.div`
  border: 3px solid green;
  background: ${theme.colors.background_white};
  /*  */
  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;

  grid-template-columns: 1fr;
  /* overflow-y: scroll; */
  /* .basket {
    background: pink;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    .admin {
      background: red;
      height: 250px;
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
  }
`;
