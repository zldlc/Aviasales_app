import React, { FC } from 'react';

import style from './Checkbox.module.scss';
import { useAppDispatch } from '../../../stores/hooks';
import { toggleFilter } from '../../../stores/ticketsFilterSlice';

interface CheckboxProps {
  label: string;
  name: string;
  active: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ label, name, active }) => {
  const dispatch = useAppDispatch();

  const onChangeFilter = (): void => {
    dispatch(toggleFilter(name));
  };

  return (
    <li>
      <label className={[style.transferFilter__filterItem, style.filterItem].join(' ')}>
        <input type="checkbox" className={style.filterItem__checkbox} checked={active} onChange={onChangeFilter} />
        <span className={style.filterItem__customCheckbox}></span>
        {label}
      </label>
    </li>
  );
};

export default Checkbox;
