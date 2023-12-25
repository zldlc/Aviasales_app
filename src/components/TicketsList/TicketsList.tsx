import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../stores/hooks/hooks';
import { fetchSearchId, fetchSearchTickets } from '../../stores/actions/searchTickets';

import Ticket from '../Ticket/Ticket';

import style from './TicketsList.module.scss';

const TicketsList: FC = () => {
  const dispatch = useAppDispatch();
  const { searchId, ticketsList } = useAppSelector((state) => state.searchTickets);

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

  return (
    <div>
      <ul className={style.ticketsList}>
        {ticketsList.map((ticket) => {
          return <Ticket key={getRandomId()} {...ticket} />;
        })}
      </ul>
      <button className={style.ticketsList__showMoreBtn}>Показать еще 5 билетов!</button>
    </div>
  );
};

export default TicketsList;
