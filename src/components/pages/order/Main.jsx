import styled from "styled-components";
import { theme } from "../../../theme";

function Main() {
  return <MainStyled></MainStyled>;
}

export default Main;

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  /*  */
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
