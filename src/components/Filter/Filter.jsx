import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css'; // Import CSS styles

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="filter" className={styles.filterLabel}>
        Filter by name:
      </label>
      <input
        id="filter"
        className={styles.inputText}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
