import React, { FC } from 'react';

import style from './TicketsSort.module.scss';
import { useAppDispatch, useAppSelector } from '../../stores/hooks/hooks';
import { toggleTabs } from '../../stores/slices/ticketsSortSlice';

const TicketsSort: FC = () => {
  const dispatch = useAppDispatch();
  const currentTab = useAppSelector((state) => state.ticketsSort.currentSortTab);

  return (
    <ul className={style.ticketsSort}>
      <li>
        <button
          className={
            currentTab === 'cheap'
              ? [style.ticketsSort__item, style.ticketsSort__item_first, style.ticketsSort__item_active].join(' ')
              : [style.ticketsSort__item, style.ticketsSort__item_first].join(' ')
          }
          onClick={() => dispatch(toggleTabs('cheap'))}
        >
          Самый дешевый
        </button>
      </li>
      <li>
        <button
          className={
            currentTab === 'fast'
              ? [style.ticketsSort__item, style.ticketsSort__item_active].join(' ')
              : style.ticketsSort__item
          }
          onClick={() => dispatch(toggleTabs('fast'))}
        >
          Самый быстрый
        </button>
      </li>
      <li>
        <button
          className={
            currentTab === 'optimal'
              ? [style.ticketsSort__item, style.ticketsSort__item_last, style.ticketsSort__item_active].join(' ')
              : [style.ticketsSort__item, style.ticketsSort__item_last].join(' ')
          }
          onClick={() => dispatch(toggleTabs('optimal'))}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  );
};

export default TicketsSort;
