import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getTabSelected, tabsConfig } from "./tabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  // 1. récupérer la liste de tous les tabs
  const tabs = tabsConfig;

  // 2. sélectionner le tab qui m'intéresse
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  // 3. afficher le label du tab qui m'intéresse

  return (
    <AdminPanelStyled>
      <p>{tabSelected.label}</p>
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
