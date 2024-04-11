import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice'; // assuming you have a filterSlice for managing filter state

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value); // assuming filter state is stored under 'filter' slice and has a 'value' field

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter contacts..."
      />
    </div>
  );
};
