import { useSelector } from 'react-redux';
import { selectFilteredContacts } from './contactsSelectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          {/* Delete button and other logic */}
        </li>
      ))}
    </ul>
  );
};
