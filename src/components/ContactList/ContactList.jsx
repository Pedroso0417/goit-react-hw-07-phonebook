import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ContactList.module.css'; // Import CSS styles

const ContactList = () => {
  // Select the contacts from the Redux store
  const contacts = useSelector();

  return (
    <div className={styles.contactListContainer}>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            <div>Name: {contact.name}</div>
            <div>Email: {contact.email}</div>
            {/* Add other contact details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
