import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
// import CONTACTS from "../components/contacts.json"
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

export const contactsSlice = createSlice({   
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) => 
    builder

  //     .addMatcher(
  //       // Обрабатываем все pending экшены
  //       (action) => isPending(action),
  //       (state) => {
  //         state.loading = true;
  //         state.error = null;
  //       }
  //     )
  //     .addMatcher(
  //       // Обрабатываем все fulfilled экшены
  //       (action) => isFulfilled(action),
  //       (state, action) => {
  //         if (action.type.startsWith("contacts/fetchContacts")) {
  //           state.items = action.payload;
  //         } else if (action.type.startsWith("contacts/addContact")) {
  //           state.items.push(action.payload);
  //         } else if (action.type.startsWith("contacts/deleteContact")) {
  //           state.items = state.items.filter(contact => contact.id !== action.payload.id);
  //         }
  //         state.loading = false;
  //       }
  //     )
  //     .addMatcher(
  //       // Обрабатываем все rejected экшены
  //       (action) => isRejected(action),
  //       (state, action) => {
  //         state.error = action.error ? action.error.message : "An error occurred";
  //         state.loading = false;
  //       }
  // )
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
});

export const contactsReducer = contactsSlice.reducer;



