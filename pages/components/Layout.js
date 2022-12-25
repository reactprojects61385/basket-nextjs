import Header from "./Header";
import Footer from "./Footer";
import BasketButton from "./BasketButton";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mt-[70px]">{children}</main>
      <BasketButton />
      <Footer />
    </>
  );
}
