import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && <p>Ajouter un produit</p>}
      {currentTabSelected === "edit" && <p>Modifier un produit</p>}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};

  p {
    padding: 0 20px;
  }
`;
