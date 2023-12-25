import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { ITicket, ISearchTickets } from '../../types/types';

export const fetchSearchId = createAsyncThunk<string>('tickets/fetchSearchId', async () => {
  const response = await axios.get('https://aviasales-test-api.kata.academy/search');

  return response.data.searchId;
});

export const fetchSearchTickets = createAsyncThunk<ITicket[], string>(
  'tickets/fetchSearchTickets',
  async (searchId) => {
    const response = await axios.get<ISearchTickets>(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );

    return response.data.tickets;
  }
);
