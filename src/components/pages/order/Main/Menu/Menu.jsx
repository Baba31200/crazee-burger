import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
export default function Menu() {
  //state
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext);
  //comportement( gestionnaire  d'evenement ou event handler)
  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menu.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClickedOn);

    titleEditRef.current.focus();
  };

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
  };

  //Affichage
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  /* border: 1px solid blue; */
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  overflow-y: scroll;
`;
