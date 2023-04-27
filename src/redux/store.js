import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';


export const store = configureStore({
  reducer: {
    tasks: contactsReducer,
    filters: filtersReducer,
  },
});
