import React, { FC } from 'react';

import Checkbox from '../UI/Checkbox/Checkbox';

import style from './TransferFilter.module.scss';
import { useAppSelector } from '../../stores/hooks/hooks';

const TransferFilter: FC = () => {
  const filters = useAppSelector((state) => state.ticketsFilter.filters);

  return (
    <div className={style.transferFilter}>
      <span className={style.transferFilter__title}>Количество пересадок</span>
      <ul className={style.transferFilter__filterList}>
        {filters.map((filter) => {
          return <Checkbox key={filter.name} {...filter} />;
        })}
      </ul>
    </div>
  );
};

export default TransferFilter;
