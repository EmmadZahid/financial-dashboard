import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./creditCardSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
