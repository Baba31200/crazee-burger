import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    //1. copie du state
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket =
      find(productToAdd.id, basketCopy) !== undefined;
    // console.log("isProductAlreadyInBasket: ", isProductAlreadyInBasket)

    //2. manip de la copie du state
    // 1er cas : le produit n'est pas déjà dans le basket
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      //3. update du state
      setBasket(basketUpdated);
    } else {
      // 2ème cas : le produit n'est déjà dans le basket
      const indexOfBasketProductToIncrement = basket.findIndex(
        (basketProduct) => basketProduct.id === productToAdd.id
      );

      // console.log("indexOfBasketProductToIncrement: ", indexOfBasketProductToIncrement)
      console.log(
        "basket[indexOfBasketProductToIncrement]: ",
        basketCopy[indexOfBasketProductToIncrement]
      );
      basketCopy[indexOfBasketProductToIncrement].quantity += 1;
      //3. update du state
      setBasket(basketCopy);
    }
  };

  return { basket, handleAddToBasket };
};
