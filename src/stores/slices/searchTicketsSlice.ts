import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId } from '../actions/searchTickets';

import { ITicket } from '../../types/types';

interface searchTicketsState {
  searchId: string;
  ticketsList: ITicket[];
  isLoading: boolean;
  isError: string;
}

const initialState: searchTicketsState = {
  searchId: '',
  ticketsList: [],
  isLoading: false,
  isError: '',
};

const searchTicketsSlice = createSlice({
  name: 'searchTickets',
  initialState,
  reducers: {
    addTickets(state, action) {
      state.ticketsList.push(...action.payload);
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload;
    });
  },
});

export const { addTickets, isLoading } = searchTicketsSlice.actions;
export default searchTicketsSlice.reducer;
