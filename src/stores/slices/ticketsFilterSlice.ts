import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ticketsFilter {
  label: string;
  name: string;
  active: boolean;
}

interface ticketsFilterState {
  filters: ticketsFilter[];
}

const initialState: ticketsFilterState = {
  filters: [
    { label: 'Все', name: 'all', active: false },
    { label: 'Без пересадок', name: 'without', active: true },
    { label: '1 пересадка', name: 'one', active: false },
    { label: '2 пересадка', name: 'two', active: false },
    { label: '3 пересадка', name: 'three', active: false },
  ],
};

const ticketsFilterSlice = createSlice({
  name: 'ticketsFilter',
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<string>) => {
      const { filters } = state;
      const { payload } = action;

      if (payload === 'all') {
        const isAllActive = filters.every((filter) => filter.active);
        state.filters = filters.map((filter) => ({ ...filter, active: !isAllActive }));
      } else {
        const updatedFilters = filters.map((filter) => {
          return filter.name === payload ? { ...filter, active: !filter.active } : filter;
        });

        const isEveryActive = updatedFilters.slice(1).every((filter) => filter.active);

        state.filters = updatedFilters.map((filter) => {
          return filter.name === 'all' ? { ...filter, active: isEveryActive } : filter;
        });
      }
    },
  },
});

export const { toggleFilter } = ticketsFilterSlice.actions;
export default ticketsFilterSlice.reducer;
