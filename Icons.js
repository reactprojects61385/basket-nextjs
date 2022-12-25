import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoBagAdd } from "react-icons/io5";

const Icons = [
  {
    name: "Basket",
    icon: RiShoppingBasket2Line,
  },
  {
    name: "AddBasket",
    icon: IoBagAdd,
  },
];

export const getIcon = (name, size = 24) => {
  let array = Icons.filter((i) => i.name === name);
  let match = array[0];

  if (array) {
    return <match.icon size={size} />;
  }
};
