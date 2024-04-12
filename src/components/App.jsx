import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contacts/contactsOperation';
import { setFilter } from '../redux/filter/filterSlice'; // import setFilter action
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.value); // assuming filter state is stored under 'filter' slice and has a 'value' field
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    dispatch(addContact(newContact));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const updateFilter = value => {
    dispatch(setFilter(value)); // dispatch setFilter action with new value
  };

  const filterContacts = () => {
    const filterLowerCase =
      typeof filter === 'string' ? filter.toLowerCase() : '';
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

   // Call filterContacts function to get the array of filtered contacts

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addNewContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={updateFilter} />
      <ContactList
        filteredContacts={filterContacts} // Pass filteredContacts as a constant variable
        deleteContact={removeContact}
      />
    </div>
  );
};
