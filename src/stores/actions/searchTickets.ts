import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { addTickets, isLoading } from '../slices/searchTicketsSlice';

export const fetchSearchId = createAsyncThunk<string>('tickets/fetchSearchId', async () => {
  const response = await axios.get('https://aviasales-test-api.kata.academy/search');

  return response.data.searchId;
});

export const fetchSearchTickets = createAsyncThunk(
  'tickets/fetchSearchTickets',
  async (id: string, { dispatch, rejectWithValue }) => {
    dispatch(isLoading(true));
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);

      if (!response.ok) {
        throw new Error('error');
      }

      const data = await response.json();

      if (!data.stop) {
        dispatch(addTickets(data.tickets));
        await dispatch(fetchSearchTickets(id));
      } else {
        dispatch(isLoading(false));
      }
    } catch (e: any) {
      if (e.message === 'error') {
        await dispatch(fetchSearchTickets(id));
      }
      return rejectWithValue(e.message);
    }
  }
);
