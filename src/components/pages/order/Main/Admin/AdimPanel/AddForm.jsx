import styled from "styled-components";

function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URl" />
        <input type="text" placeholder="Price" />
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
