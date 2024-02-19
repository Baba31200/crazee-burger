import { useContext } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import styled from "styled-components";
import SubmitMessage from "./SubmitMessage";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextsConfig";
import { useState } from "react";

function EditForm() {
  const [productBeingEdited, setProductBeingEdited] = useState();
  const { productSelected } = useContext(OrderContext);
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProductBeingEdited({ ...productBeingEdited, [name]: value });
  };

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
    </EditFormStyled>
  );
}
const EditFormStyled = styled.form`
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
      /* width: 50%; */
      height: 100%;
    }
  }
`;

export default EditForm;
