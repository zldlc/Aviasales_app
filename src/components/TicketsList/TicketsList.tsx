import React, { FC, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../stores/hooks/hooks';
import { fetchSearchId, fetchSearchTickets } from '../../stores/actions/searchTickets';

import Ticket from '../Ticket/Ticket';

import style from './TicketsList.module.scss';
import Spinner from '../UI/Spinner/Spinner';

const TicketsList: FC = () => {
  const [ticketsCount, setTicketsCount] = useState<number>(5);
  const dispatch = useAppDispatch();
  const { searchId, ticketsList, isLoading } = useAppSelector((state) => state.searchTickets);
  const activeTab = useAppSelector((state) => state.ticketsSort.currentSortTab);
  const filters = useAppSelector((state) => state.ticketsFilter.filters);

  useEffect(() => {
    dispatch(fetchSearchId());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (searchId) {
      dispatch(fetchSearchTickets(searchId));
    }
  }, [dispatch, searchId]);

  function getRandomId(): string {
    return Math.random().toString(36).slice(2);
  }

  const sortTickets = useMemo(() => {
    setTicketsCount(5);

    const activeFilters: Record<string, boolean> = {};
    filters.forEach((filter) => (activeFilters[filter.name] = filter.active));

    if (ticketsList) {
      const filteredArr = ticketsList.filter((item) => {
        if (activeFilters['without'] && item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0) {
          return true;
        }

        if (activeFilters['one'] && item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1) {
          return true;
        }

        if (activeFilters['two'] && item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2) {
          return true;
        }

        if (activeFilters['three'] && item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3) {
          return true;
        }

        return false;
      });

      switch (activeTab) {
        case 'cheap':
          return filteredArr.sort((a, b) => a.price - b.price);
        case 'fast':
          return filteredArr.sort(
            (a, b) =>
              a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
          );
        case 'optimal':
          return filteredArr;
        default:
          return [];
      }
    } else {
      return [];
    }
  }, [ticketsList, activeTab, filters]);

  return (
    <div>
      {isLoading ? <Spinner /> : null}
      <ul className={style.ticketsList}>
        {sortTickets.length === 0
          ? 'Рейсов, подходящих под заданные фильтры, не найдено'
          : sortTickets.slice(0, ticketsCount).map((ticket) => {
              return <Ticket key={getRandomId()} {...ticket} />;
            })}
      </ul>
      <button className={style.ticketsList__showMoreBtn} onClick={() => setTicketsCount((state) => state + 5)}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default TicketsList;
