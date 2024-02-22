import { useContext, useState } from "react";

import OrderContext from "../../../../../../context/OrderContext";

import { EMPTY_PRODUCT } from "../../../../../../enums/product";

import Form from "./Form";

import SubmitButton from "./SubmitButton";

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

  //Affichage
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      {/* <>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </> */}
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
export default AddForm;
