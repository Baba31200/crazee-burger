import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import Totale from "./Totale";
import { formatPrice } from "../../../../../utils/maths";

export default function Basket() {
  return (
    <BasketStyled>
      <Totale amountTopay={formatPrice(0)} />
      <div className="body">Body</div>
      <Header>Footer</Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;
