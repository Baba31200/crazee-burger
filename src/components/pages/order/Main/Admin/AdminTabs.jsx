import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  // state
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  // comportements
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAddClick = () => {
    setIsCollapsed(false);
    setIsAddSelected(true);
    setIsEditSelected(false);
  };

  const handleEditClick = () => {
    setIsCollapsed(false);
    setIsEditSelected(true);
    setIsAddSelected(false);
  };

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={handleClick}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={handleAddClick}
        className={isAddSelected ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={handleEditClick}
        className={isEditSelected ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
