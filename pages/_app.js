import "../styles/globals.css";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import NextNProgress from "nextjs-progressbar";

import store from "../store";
import { Provider } from "react-redux";

import { Inter } from "@next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNProgress color="#1d1d1f" />
      <div className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  );
}
