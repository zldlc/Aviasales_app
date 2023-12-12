import React, { FC } from 'react';

import FlightInfo from '../FlightInfo/FlightInfo';

import style from './Ticket.module.scss';
import s7Logo from './S7_logo.png';

const Ticket: FC = () => {
  return (
    <li>
      <article className={style.ticket}>
        <header className={style.ticket__header}>
          <span className={style.ticket__price}>13 400 ₽</span>
          <img src={s7Logo} alt="S7 logo" />
        </header>
        <ul className={style.ticket__flightInfoList}>
          <FlightInfo />
          <FlightInfo />
        </ul>
      </article>
    </li>
  );
};

export default Ticket;
