import { createSlice } from '@reduxjs/toolkit';

interface ticketsSortState {
  currentSortTab: string;
}

const initialState: ticketsSortState = {
  currentSortTab: 'cheap',
};

const ticketsSortSlice = createSlice({
  name: 'ticketsSort',
  initialState,
  reducers: {},
});

// export {} = ticketsFilterSlice.actions;
export default ticketsSortSlice.reducer;
