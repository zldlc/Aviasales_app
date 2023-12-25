import React, { FC } from 'react';

import { IFlightInfo } from '../../types/types';

import style from './FlightInfo.module.scss';

const FlightInfo: FC<IFlightInfo> = ({ origin, destination, stops, duration, date }) => {
  function formatFlightTime(startTimeStr: string, durationInMinutes: number): string {
    const startTime = new Date(startTimeStr);
    const endTime = new Date(startTime.getTime() + durationInMinutes * 60000);

    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

    const formattedStartTime = `${formatNumber(startTime.getHours())}:${formatNumber(startTime.getMinutes())}`;
    const formattedEndTime = `${formatNumber(endTime.getHours())}:${formatNumber(endTime.getMinutes())}`;

    return `${formattedStartTime} - ${formattedEndTime}`;
  }

  function getStopsEnding(count: number): string {
    let ending;

    if (count === 1) {
      ending = 'пересадка';
    } else if (count >= 2 && count <= 4) {
      ending = 'пересадки';
    } else {
      ending = 'пересадок';
    }

    return count !== 0 ? `${count} ${ending}` : 'Без пересадок';
  }

  function formatDuration(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className={style.flightInfo}>
      <div className={style.flightInfo__infoBlock}>
        <span className={style.flightInfo__title}>
          {origin} - {destination}
        </span>
        <span className={style.flightInfo__text}>{formatFlightTime(date, duration)}</span>
      </div>
      <div className={style.flightInfo__infoBlock}>
        <span className={style.flightInfo__title}>В пути</span>
        <span className={style.flightInfo__text}>{formatDuration(duration)}</span>
      </div>
      <div className={style.flightInfo__infoBlock}>
        <span className={style.flightInfo__title}>{getStopsEnding(stops.length)}</span>
        <span className={style.flightInfo__text}>{stops.join(', ')}</span>
      </div>
    </li>
  );
};

export default FlightInfo;
