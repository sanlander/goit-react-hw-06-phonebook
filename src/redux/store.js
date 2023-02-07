import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer';
import { filtersReducer } from './filtersReducer';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
