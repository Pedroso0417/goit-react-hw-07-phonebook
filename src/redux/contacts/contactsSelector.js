import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelector';
import { selectContacts as selectAllContacts } from '../contact/contactsSelector'; // the original selectContacts to avoid conflict

// Selectors
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectStatusFilter = state => state.filters.status;

// Memoized Selector using createSelector
export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter], // Use the renamed selectContacts here
  (contacts, filter) => {
    const statusFilter = filter.status;
    if (statusFilter === 'all') {
      return contacts;
    }
    return contacts.filter(contact => contact.status === statusFilter);
  }
);
