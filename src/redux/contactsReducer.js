import { createSlice, nanoid } from '@reduxjs/toolkit';
import { firstLetterToUppercase } from 'components';

// const LS_KEY = 'contacts_of_LS';

// const contactsInitialState = () => {
//   const dateOfLocalStorage = localStorage.getItem(LS_KEY);
//   return dateOfLocalStorage
//     ? [...JSON.parse(localStorage.getItem(LS_KEY))]
//     : [];
// };
const contactsInitialState = [
  {
    id: 11,
    name: 'Alexandr',
    number: '0674552288',
  },
  {
    id: 12,
    name: 'Alexandre',
    number: '0674552288',
  },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts(state, action) {
      const { name, number } = action.payload;
      const newContact = {
        id: nanoid(),
        name: firstLetterToUppercase(name),
        number,
      };

      state.unshift(newContact);
    },

    deleteContacts(state, action) {
      return state.filter(i => i.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
