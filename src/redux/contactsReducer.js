import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { firstLetterToUppercase } from 'components';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      const { name, phone } = action.payload;
      const id = nanoid(5);

      const newContact = {
        id,
        name: firstLetterToUppercase(name),
        phone,
      };

      state[id] = newContact;
    },

    deleteContacts(state, action) {
      const idDelete = action.payload;
      delete state[idDelete];
      return state;

      // return state.filter(i => i.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contactss',
  storage,
};

export const persistContactsdReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, deleteContacts } = contactsSlice.actions;
