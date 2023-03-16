import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;