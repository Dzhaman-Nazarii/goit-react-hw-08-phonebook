import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

// export const { addContact, deleteContact } = contactsSlice.actions;

// reducers: {
//   addContact: (state, action) => {
//     state.items.push(action.payload);
//   },
//   deleteContact: (state, action) => {
//     state.items = state.items.filter(
//       contact => contact.idValue !== action.payload
//     );
//   },
// }
