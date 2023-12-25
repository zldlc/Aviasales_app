import React, { FC } from 'react';

import FlightInfo from '../FlightInfo/FlightInfo';

import style from './Ticket.module.scss';
import { IFlightInfo } from '../../types/types';

interface ITicketProps {
  price: number;
  carrier: string;
  segments: IFlightInfo[];
}

const Ticket: FC<ITicketProps> = ({ price, carrier, segments }) => {
  return (
    <li>
      <article className={style.ticket}>
        <header className={style.ticket__header}>
          <span className={style.ticket__price}>{price.toLocaleString('ru-RU')} ₽</span>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="S7 logo" />
        </header>
        <ul className={style.ticket__flightInfoList}>
          {segments.map((item, index) => {
            return <FlightInfo key={index} {...item} />;
          })}
        </ul>
      </article>
    </li>
  );
};

export default Ticket;
