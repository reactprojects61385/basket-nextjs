import { configureStore } from "@reduxjs/toolkit";
import basket from "./Basket";

export default configureStore({
  reducer: {
    basket,
  },
});
