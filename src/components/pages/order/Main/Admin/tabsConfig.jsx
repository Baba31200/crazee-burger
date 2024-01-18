import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";

export const getTabsConfig = (currentTabSelected, selectTab) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    onClick: () => selectTab("add"),
    className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    onClick: () => selectTab("edit"),
    className: currentTabSelected === "edit" ? "is-active" : "",
  },
  {
    index: "settings",
    label: "Modifier paramètres",
    Icon: <FiSettings />,
    onClick: () => selectTab("settings"),
    className: currentTabSelected === "settings" ? "is-active" : "",
  },
  {
    index: "theme",
    label: "Modifier thème",
    Icon: <BsFillSunFill />,
    onClick: () => selectTab("theme"),
    className: currentTabSelected === "theme" ? "is-active" : "",
  },
];
