import React from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
export const ContactList = ({ filteredContacts, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts && filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))
      ) : (
        <li className={css.noContacts}>No contacts found</li>
      )}
    </ul>
  );
};
