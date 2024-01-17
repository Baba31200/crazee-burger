import styled from "styled-components";
import { theme } from "../../../../../theme";

function AdminPanel() {
  return <AdminPanelStyled>Admin panel</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  border: 1px solid blue;

  height: 250px;

  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;

export default AdminPanel;
