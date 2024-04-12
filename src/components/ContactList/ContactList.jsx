import React from 'react';
import { useDispatch } from 'react-redux';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts && filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))
      ) : (
        <li>Contacts found</li>
      )}
    </ul>
  );
};
