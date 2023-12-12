import React, { FC } from 'react';

import style from './TicketsSort.module.scss';

const TicketsSort: FC = () => {
  return (
    <ul className={style.ticketsSort}>
      <li>
        <button
          className={[style.ticketsSort__item, style.ticketsSort__item_first, style.ticketsSort__item_active].join(' ')}
        >
          Самый дешевый
        </button>
      </li>
      <li>
        <button className={style.ticketsSort__item}>Самый быстрый</button>
      </li>
      <li>
        <button className={[style.ticketsSort__item, style.ticketsSort__item_last].join(' ')}>Оптимальный</button>
      </li>
    </ul>
  );
};

export default TicketsSort;
