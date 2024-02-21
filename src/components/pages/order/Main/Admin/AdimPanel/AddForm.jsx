import { useContext, useState } from "react";

import OrderContext from "../../../../../../context/OrderContext";

import { EMPTY_PRODUCT } from "../../../../../../enums/product";

import Form from "./Form";

function AddForm() {
  //State

  const { handleAdd, newProduct, setNewproduct } = useContext(OrderContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  //Comportement

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewproduct(EMPTY_PRODUCT);

    setIsSubmitted(true);

    displaySuccesMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewproduct({ ...newProduct, [name]: value });
  };

  const displaySuccesMessage = () => {
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  // const inputTexts = [
  //   {
  //     id: "0",
  //     name: "title",
  //     value: newProduct.title,
  //     type: "text",
  //     placeholder: "Nom du produit (ex: super burger)",
  //     Icon: <FaHamburger />,
  //     version: "minimalist",
  //   },
  //   {
  //     id: "1",
  //     name: "imageSource",
  //     value: newProduct.imageSource,
  //     type: "text",
  //     placeholder:
  //       "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
  //     Icon: <BsFillCameraFill />,
  //     version: "minimalist",
  //   },
  //   {
  //     id: "2",
  //     name: "price",
  //     value: newProduct.price ? newProduct.price : "",
  //     type: "text",
  //     placeholder: "Prix",
  //     Icon: <MdOutlineEuro />,
  //     version: "minimalist",
  //   },
  // ];
  //Affichage
  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    />
  );
}
export default AddForm;
