import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId, fetchSearchTickets } from '../actions/searchTickets';

import { ITicket } from '../../types/types';

interface searchTicketsState {
  searchId: string;
  ticketsList: ITicket[];
  isLoading: boolean;
}

const initialState: searchTicketsState = {
  searchId: '',
  ticketsList: [],
  isLoading: false,
};

const searchTicketsSlice = createSlice({
  name: 'searchTickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
      .addCase(fetchSearchTickets.fulfilled, (state, action) => {
        state.ticketsList = action.payload;
        state.isLoading = false;
      });
  },
});

export default searchTicketsSlice.reducer;
