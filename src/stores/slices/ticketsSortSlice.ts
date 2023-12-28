import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ticketsSortState {
  currentSortTab: string;
}

const initialState: ticketsSortState = {
  currentSortTab: 'cheap',
};

const ticketsSortSlice = createSlice({
  name: 'ticketsSort',
  initialState,
  reducers: {
    toggleTabs: (state, action: PayloadAction<string>) => {
      state.currentSortTab = action.payload;
    },
  },
});

export const { toggleTabs } = ticketsSortSlice.actions;
export default ticketsSortSlice.reducer;
