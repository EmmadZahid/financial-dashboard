import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./creditCardSlice";
import usersReducer from "./usersSlice";
import recentTransactionsReducer from "./recentTransactionsSlice";
const store = configureStore({
  reducer: {
    cards: cardsReducer,
    users: usersReducer,
    recentTransactions: recentTransactionsReducer,
  },
});

export default store;
