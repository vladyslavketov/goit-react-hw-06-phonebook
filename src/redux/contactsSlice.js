import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
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