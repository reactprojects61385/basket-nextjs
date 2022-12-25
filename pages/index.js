import ProductsView from "./components/ProductsView";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsFromApi = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=10");
      const json = response.json();

      return json;
    };

    getProductsFromApi().then((res) => setProducts(res?.products));
  }, []);

  return <ProductsView data={products} />;
}
