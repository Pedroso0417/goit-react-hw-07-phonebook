import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelector';

// Selectors
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectStatusFilter = state => state.filters.status;

// Memoized Selector using createSelector
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const statusFilter = filter.status;
    if (statusFilter === 'all') {
      return contacts;
    }
    return contacts.filter(contact => contact.status === statusFilter);
  }
);
