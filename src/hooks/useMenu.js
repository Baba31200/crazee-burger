import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  // comportements (gestionnaire du state ou state handler)

  const handleAdd = (newProduct) => {
    //1. copie du tableau

    const menuCopy = deepClone(menu);

    //2.  manip de la copie du menu

    const menuUpdated = [newProduct, ...menuCopy];

    //3. update du state
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    //copie du state
    const menuCopy = deepClone(menu);

    //manipulation du copie du state

    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );

    //update du state

    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    //1. copie du state (deep clone)
    const menuCopy = deepClone(menu);

    //2 manipulation du copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;
    //3 update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};

export default useMenu;
