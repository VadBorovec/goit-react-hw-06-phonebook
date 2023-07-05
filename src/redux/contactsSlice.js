import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      // return state.items.filter(item => item.id !== action.payload);
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['value'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { add, remove } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
