import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6603201f2393662c31ce9826.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // We use the underscore character as the name of the first parameter,
  // because we don't need it in this operation
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // If the request is successful, we return a promise with data
      return response.data;
    } catch (e) {
      // If the request fails, return the promise
      // which will be rejected with an error text
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
