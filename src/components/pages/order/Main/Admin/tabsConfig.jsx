import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdimPanel/AddForm";

import EditForm from "./AdimPanel/EditForm";
import HintMessage from "./AdimPanel/HintMessage";
import { FiSettings } from "react-icons/fi";
import Button from "../../../../reusable-ui/Button";
import Form from "./AdimPanel/Form";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  },
  {
    index: "manger",
    label: "Autre onglet",
    Icon: <FiSettings />,
    Content: <UnComposant />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};

export function UnComposant() {
  return (
    <Form
      product={{
        id: "1",
        imageSource: "/images/burger1.png",
        title: "Burger 1",
        price: 5.297,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
      }}
    >
      <div style={{ width: "50%" }}>
        <Button version="normal" label={"Bonjour"} />
      </div>
    </Form>
  );
}
