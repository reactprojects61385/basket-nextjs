import StackGrid from "react-stack-grid";
import Image from "next/image";
import Link from "next/link";
import { getIcon } from "../../Icons";
import ContentLoader from "react-content-loader";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/Basket";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ProductsView({ data }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const addToBasket = (data) => {
    dispatch(addProduct(data));
    toast.success("Product added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <section className="container mx-auto py-8">
      <div
        className="mb-8 px-4 sticky top-[70px] bg-white/70 z-20 h-10 flex items-center border-b"
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <h1 className="text-md uppercase tracking-widest text-slate-600 leading-6">
          — Products
        </h1>
      </div>
      <StackGrid columnWidth={250} className="bg-[#f9f9f9] rounded-xl">
        {data &&
          data.map((product) => (
            <div
              className="flex justify-between flex-col rounded-xl bg-white border p-5 transition-all hover:shadow-2xl hover:border-[rgba(0,0,0,.35)]"
              key={product.id}
            >
              <div className="inline-flex items-center relative justify-center overflow-hidden rounded-xl h-[120px] mb-4">
                <Image
                  src={product.thumbnail}
                  alt="image"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="px-2 mb-4 cursor-default">
                <h2 className="text-xl text-slate-900 leading-8">
                  {product.title}
                </h2>
                <p className="text-xs text-[#7d7d7d] tracking-tight leading-4 mt-1">
                  {product.description}
                </p>
              </div>
              <div className="px-1 pb-4">
                <div className="tracking-tight block text-left inline-flex items-center justify-center">
                  <span className="text-xl text-blue-700 font-bold whitespace-nowrap">
                    {product.price} TL
                  </span>
                  <span className="text-xs px-4 font-semibold text-slate-600 whitespace-nowrap">
                    — %{product.discountPercentage} Discount
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 h-10">
                <Link href={`/product/${product.id}`} legacyBehavior>
                  <a className="flex-5 bg-gray-900 text-white font-bold cursor-pointer w-full text-sm h-full rounded-xl flex items-center justify-center">
                    Go to Product
                  </a>
                </Link>
                <button
                  className="flex-1 bg-white border h-full min-w-[40px] rounded-xl inline-flex items-center justify-center transition-all hover:border-[rgba(0,0,0,.45)]"
                  title="Add to basket"
                  onClick={() => addToBasket(product)}
                >
                  {getIcon("AddBasket", 16)}
                </button>
              </div>
            </div>
          ))}
        {data.length === 0 && (
          <ContentLoader
            width={1200}
            height={400}
            viewBox="0 0 1200 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
            <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
            <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
            <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
            <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
            <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
            <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />

            <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
            <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
            <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
            <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
            <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
            <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
            <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />

            <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
            <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
            <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
            <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
            <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
            <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
            <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />

            <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
            <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
            <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
            <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
            <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
            <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
            <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />

            <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
            <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
            <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
            <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
            <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
            <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
            <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />

            <rect x="978" y="138" rx="10" ry="10" width="169" height="19" />
            <rect x="977" y="195" rx="10" ry="10" width="169" height="19" />
            <rect x="977" y="257" rx="10" ry="10" width="169" height="19" />
            <rect x="977" y="315" rx="10" ry="10" width="169" height="19" />
            <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />

            <circle cx="37" cy="97" r="11" />
            <rect x="26" y="23" rx="5" ry="5" width="153" height="30" />
            <circle cx="77" cy="96" r="11" />
          </ContentLoader>
        )}
      </StackGrid>
    </section>
  );
}
