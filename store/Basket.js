import { createSlice } from "@reduxjs/toolkit";

export const Basket = createSlice({
  name: "Basket",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      let getItem = state.products.filter(
        ($product) => $product.itemId === action.payload.id
      );

      if (getItem.length > 0) {
        // TODO: Update item
        let otherProducts = state.products.filter(
          ($product) => $product.itemId !== action.payload.id
        );

        state.products = [
          ...otherProducts,
          {
            itemId: action.payload.id,
            item: action.payload,
            count: getItem[0].count + 1,
          },
        ];
      } else {
        state.products = [
          ...state.products,
          {
            itemId: action.payload.id,
            item: action.payload,
            count: 1,
          },
        ];
      }
    },
  },
});

export const { addProduct } = Basket.actions;
export default Basket.reducer;
