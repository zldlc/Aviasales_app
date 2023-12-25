import { configureStore } from '@reduxjs/toolkit';
import ticketsSortReducer from './slices/ticketsSortSlice';
import ticketsFilterReducer from './slices/ticketsFilterSlice';
import searchTicketsReducer from './slices/searchTicketsSlice';

export const store = configureStore({
  reducer: {
    ticketsFilter: ticketsFilterReducer,
    ticketsSort: ticketsSortReducer,
    searchTickets: searchTicketsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
