import React, { FC } from 'react';

import Ticket from '../Ticket/Ticket';

import style from './TicketsList.module.scss';

const TicketsList: FC = () => {
  return (
    <div>
      <ul className={style.ticketsList}>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </ul>
      <button className={style.ticketsList__showMoreBtn}>Показать еще 5 билетов!</button>
    </div>
  );
};

export default TicketsList;
