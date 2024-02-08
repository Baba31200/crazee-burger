import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

import TextInput from "../../../../../reusable-ui/TextInput";

import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextsConfig";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

function AddForm() {
  //State

  const { handleAdd, newProduct, setNewproduct } = useContext(OrderContext);

  // const [newProduct, setNewproduct] = useState(EMPTY_PRODUCT);

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

  const inputTexts = getInputTextsConfig(newProduct);
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
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            // name={input.name}
            // value={input.value}
            // placeholder={input.placeholder}
            // Icon={input.Icon}

            {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />

        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  /* border: 2px solid black; */

  display: grid;

  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1/2/-2/3;

    display: grid;
    grid-row-gap: 8px;
  }
  .submit {
    /* background: green; */
    grid-area: 4/-2/-1/-1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      width: 50%;
    }
  }
`;
export default AddForm;
