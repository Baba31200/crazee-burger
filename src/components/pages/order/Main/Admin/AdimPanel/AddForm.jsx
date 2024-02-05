import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

function AddForm() {
  //State
  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  //Comportement

  const handleSubmit = (event) => {
    event.preventDefault();

    //copie new fruit ={id, fruit}

    const newProduct = {
      id: new Date().getTime(),
      title: title,
      imageSource: imageSource,
      price: price,
    };

    handleAdd(newProduct);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageSource(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  //Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune Image</div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Nom"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Image URl"
          value={imageSource}
          onChange={handleImageChange}
        />
        <input
          type="text"
          placeholder="Price"
          value={price ? price : ""}
          onChange={handlePriceChange}
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
