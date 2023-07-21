import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./index"; // root reducer'ı import edin

const store = configureStore({
  reducer: rootReducer, // root reducer'ı configureStore'a geçin
});

export default store;
