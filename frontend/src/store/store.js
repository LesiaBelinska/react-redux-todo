import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoSlice from "./slices/todoSlicer.js";
import themeSlice from "./slices/themeSlicer.js";

const themePersistConfig = {
  key: "theme",
  storage,
};

const todoPersistConfig = {
  key: "todos",
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeSlice);
const persistedTodoReducer = persistReducer(todoPersistConfig, todoSlice);

const store = configureStore({
  reducer: {
    todos: persistedTodoReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
