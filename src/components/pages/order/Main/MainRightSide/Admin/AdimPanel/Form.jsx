/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";

import TextInput from "../../../../../../reusable-ui/TextInput";

import ImagePreview from "./ImagePreview";

import { getInputTextsConfig } from "./inputTextsConfig";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, isSubmitted, children }, ref) => {
    //State (vide)

    //Comportement (vide)

    const inputTexts = getInputTextsConfig(product);
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
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              {...input}
              key={input.id}
              onChange={onChange}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .form-footer {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
