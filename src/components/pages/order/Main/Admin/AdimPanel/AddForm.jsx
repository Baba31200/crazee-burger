import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import TextInput from "../../../../../reusable-ui/TextInput";

import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../../../reusable-ui/Button";

function AddForm() {
  //State

  const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  };
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewproduct] = useState(EMPTY_PRODUCT);

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
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune Image</div>
        )}
      </div>
      <div className="input-fields">
        <TextInput
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URl"
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />
        <TextInput
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Price"
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />

        {isSubmitted && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span className="message">Ajouté avec succés</span>
          </div>
        )}
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

  
  .image-preview {
    /* background: red; */
    grid-area: 1/1/4/2;
    display: float;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
    .empty-image {
      height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
    }
  }
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
    top:3px;

    .submit-button {
      width: 50%;
    }

    .submit-message {
      /* border: 1px solid red; */
      display:flex;
      justify-content:center;
      align-items:center;
      margin-left:5px;

      .icon{
        color:${theme.colors.success};
        margin-left:10px;
        width: 1em;
        height:1em;
        border:1px solid ${theme.colors.success};
        border-radius:50%;
        vertical-align: middle;
      }
      .message{
        margin-left:5px;
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.success};
        
      }
    }

  }
`;
export default AddForm;
