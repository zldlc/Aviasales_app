import { configureStore } from '@reduxjs/toolkit';
import ticketsSortReducer from './ticketsSortSlice';
import ticketsFilterReducer from './ticketsFilterSlice';

export const store = configureStore({
  reducer: {
    ticketsFilter: ticketsFilterReducer,
    ticketsSort: ticketsSortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
