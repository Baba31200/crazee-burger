import Button from "../../../../../../reusable-ui/Button";

import SubmitMessage from "./SubmitMessage";
// eslint-disable-next-line react/prop-types
function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}

export default SubmitButton;
