import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

function AddForm() {
  //State

  const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 12,
  };
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewproduct] = useState(EMPTY_PRODUCT);

  //Comportement

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      id: new Date().getTime(),

      ...newProduct,
    };

    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;

    const name = event.target.name;

    setNewproduct({ ...newProduct, [name]: newValue });
  };

  //Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune Image</div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URl"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Price"
          onChange={handleChange}
        />
      </div>

      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;

  display: grid;

  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1/1/4/2;
  }
  .input-fields {
    background: blue;
    grid-area: 1/2/-2/3;

    display: grid;
  }
  .submit-button {
    background: green;
    grid-area: 4/-2/-1/-1;
    width: 50%;
  }
`;
export default AddForm;
