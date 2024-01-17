import styled from "styled-components";
import { theme } from "../../../../../theme";

function Admin() {
  return <AdminStyled>Admin</AdminStyled>;
}

export default Admin;

const AdminStyled = styled.div`
  background: red;
  height: 250px;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
