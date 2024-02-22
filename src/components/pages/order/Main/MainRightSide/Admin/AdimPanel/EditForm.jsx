import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  //comportement( gestionnaire  d'evenement ou event handler)
  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };
    setProductSelected(productBeingUpdated); //cette ligne update le formulaire
    handleEdit(productBeingUpdated, event); //cette ligne update le menu
  };

  //Affihage
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}

export default EditForm;
