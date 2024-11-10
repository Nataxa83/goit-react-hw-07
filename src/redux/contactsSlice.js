import { createSlice } from "@reduxjs/toolkit";
import CONTACTS from "../components/contacts.json"
import { fetchContacts } from "./contactsOps";

// const INITIAL_STATE = {
//        items: CONTACTS
// };


export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) => builder
  .addCase(fetchContacts.pending, (state) => {
    state.loading = true;
  })
  .addCase(fetchContacts.fulfilled, (state, action) => {
    state.items = action.payload;
    state.loading = false;
  })
  .addCase(fetchContacts.rejected, (state, action) => {
    state.error = action.payload;
    state.loading = false;
  })
  
});
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
// state.error = "";
//     },
//     setError (state, action) {
//       state.error = action.payload
//     },
  
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(contact => contact.id !== action.payload)
//     }
//   }

export const contactsReducer = contactsSlice.reducer;
export const {addContact, deleteContact} = contactsSlice.actions;