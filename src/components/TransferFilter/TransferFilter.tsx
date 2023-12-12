import React, { FC } from 'react';

import style from './TransferFilter.module.scss';

const TransferFilter: FC = () => {
  return (
    <div className={style.transferFilter}>
      <span className={style.transferFilter__title}>Количество пересадок</span>
      <ul className={style.transferFilter__filterList}>
        <li>
          <label className={[style.transferFilter__filterItem, style.filterItem].join(' ')}>
            <input type="checkbox" className={style.filterItem__checkbox} />
            <span className={style.filterItem__customCheckbox}></span>
            Все
          </label>
        </li>
        <li>
          <label className={[style.transferFilter__filterItem, style.filterItem].join(' ')}>
            <input type="checkbox" className={style.filterItem__checkbox} />
            <span className={style.filterItem__customCheckbox}></span>
            Без пересадок
          </label>
        </li>
        <li>
          <label className={[style.transferFilter__filterItem, style.filterItem].join(' ')}>
            <input type="checkbox" className={style.filterItem__checkbox} />
            <span className={style.filterItem__customCheckbox}></span>1 пересадка
          </label>
        </li>
        <li>
          <label className={[style.transferFilter__filterItem, style.filterItem].join(' ')}>
            <input type="checkbox" className={style.filterItem__checkbox} />
            <span className={style.filterItem__customCheckbox}></span>2 пересадки
          </label>
        </li>
        <li>
          <label className={[style.transferFilter__filterItem, style.filterItem].join(' ')}>
            <input type="checkbox" className={style.filterItem__checkbox} />
            <span className={style.filterItem__customCheckbox}></span>3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default TransferFilter;
