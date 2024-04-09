import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Use nanoid to generate a unique ID
    const id = nanoid();

    // Add the new contact with the generated ID
    handleAddContact({ id, name, number });

    // Reset the form
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formSubmit} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name:
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.formLabel}>
        Number:
        <input
          className={css.formInput}
          type="text"
          name="number"
          pattern="[\d\s\-\+\(\)]{9,}"
          title="Phone number must be at least 9 digits and can contain spaces, dashes, parentheses, and the plus sign."
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={css.submit} type="submit">
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
