import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./creditCardSlice";
import usersReducer from "./usersSlice";
import recentTransactionsReducer from "./recentTransactionsSlice";
import currentUserReducer from "./currentUserSlice";
const store = configureStore({
  reducer: {
    cards: cardsReducer,
    users: usersReducer,
    recentTransactions: recentTransactionsReducer,
    currentUser: currentUserReducer,
  },
});

export default store;
