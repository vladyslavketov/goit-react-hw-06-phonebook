import { createSlice } from '@reduxjs/toolkit';

function getInitialContacts() {
  const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));

  if (contactsFromLS) {
    return contactsFromLS;
  }
  return [];
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: getInitialContacts(),
  reducers: {
    addContacts(state, action) {
      return [...state, action.payload];
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;