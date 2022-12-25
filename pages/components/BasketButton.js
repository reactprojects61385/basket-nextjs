import { getIcon } from "../../Icons";
import { useSelector } from "react-redux";

export default function BasketButton() {
  const { products } = useSelector((state) => state.basket);

  return (
    <div
      className="fixed bottom-10 right-10 bg-blue-700 text-white/90 hover:scale-95 z-10 transition-all hover:text-white select-none px-6 py-3 rounded-2xl h-15 inline-flex items-center justify-center gap-3 font-semibold cursor-pointer tracking-tight leading-5"
      style={{ boxShadow: "0 5px 15px 0 rgba(0,0,0,.5)" }}
    >
      <span>{getIcon("Basket")}</span>
      <span>My Basket ({products.length})</span>
    </div>
  );
}
