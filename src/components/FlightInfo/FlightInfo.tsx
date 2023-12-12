import React, { FC } from 'react';

import style from './FlightInfo.module.scss';

const FlightInfo: FC = () => {
  return (
    <li className={style.flightInfo}>
      <div className={style.flightInfo__infoBlock}>
        <span className={style.flightInfo__title}>MOW – HKT</span>
        <span className={style.flightInfo__text}>10:45 – 08:00</span>
      </div>
      <div className={style.flightInfo__infoBlock}>
        <span className={style.flightInfo__title}>В пути</span>
        <span className={style.flightInfo__text}>21ч 15м</span>
      </div>
      <div className={style.flightInfo__infoBlock}>
        <span className={style.flightInfo__title}>2 пересадки</span>
        <span className={style.flightInfo__text}>HKG, JNB</span>
      </div>
    </li>
  );
};

export default FlightInfo;
