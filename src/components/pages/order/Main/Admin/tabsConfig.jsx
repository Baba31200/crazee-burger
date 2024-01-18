import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";

export const tabsConfig = [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
  {
    index: "settings",
    label: "Modifier paramètres",
    Icon: <FiSettings />,
  },
  {
    index: "theme",
    label: "Modifier thème",
    Icon: <BsFillSunFill />,
  },
];
