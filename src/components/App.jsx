import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
} from '../redux/contacts/contactsOperation';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    dispatch(addContact(newContact));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const updateFilter = value => {
    dispatch(setFilter(value));
  };

  const filterContacts = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addNewContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={updateFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact={removeContact}
      />
    </div>
  );
};
