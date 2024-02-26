import { useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";

import { EMPTY_PRODUCT } from "../../../enums/product";

import useMenu from "../../../hooks/useMenu";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewproduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu();
  // // comportements (gestionnaire du state ou state handler)

  // const handleAdd = (newProduct) => {
  //   //1. copie du tableau

  //   const menuCopy = deepClone(menu);

  //   //2.  manip de la copie du menu

  //   const menuUpdated = [newProduct, ...menuCopy];

  //   //3. update du state
  //   setMenu(menuUpdated);
  // };

  // const handleDelete = (idOfProductToDelete) => {
  //   //copie du state
  //   const menuCopy = deepClone(menu);

  //   //manipulation du copie du state

  //   const menuUpdated = menuCopy.filter(
  //     (product) => product.id !== idOfProductToDelete
  //   );

  //   //update du state

  //   setMenu(menuUpdated);
  // };

  // const handleEdit = (productBeingEdited) => {
  //   //1. copie du state (deep clone)
  //   const menuCopy = deepClone(menu);

  //   //2 manipulation du copie du state
  //   const indexOfProductToEdit = menu.findIndex(
  //     (menuProduct) => menuProduct.id === productBeingEdited.id
  //   );

  //   menuCopy[indexOfProductToEdit] = productBeingEdited;
  //   //3 update du state
  //   setMenu(menuCopy);
  // };

  // const resetMenu = () => {
  //   setMenu(fakeMenu.MEDIUM);
  // };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewproduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  };

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    /* height: 833px; */
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
