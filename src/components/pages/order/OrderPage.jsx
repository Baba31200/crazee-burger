import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(true);

  //comportement

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
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

export default OrderPage;

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
