import { createSlice } from "@reduxjs/toolkit";
import CONTACTS from "../components/contacts.json"

const INITIAL_STATE = {
       items: CONTACTS
};


export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
state.error = "";
    },
    setError (state, action) {
      state.error = action.payload
    },
  
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload)
    }
  }
});

export const contactsReducer = contactsSlice.reducer;
export const {addContact, deleteContact} = contactsSlice.actions;