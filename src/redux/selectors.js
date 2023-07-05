import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;
export const getFilter = state => state.filter;

export const visibleTodos = createSelector(
  // Масив вхідних селекторів
  [selectContact, getFilter],
  // Функція перетворювач
  (contacts, filter) => {
    return contacts.filter(e =>
      e.text.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);
