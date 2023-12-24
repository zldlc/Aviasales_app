import React, { FC } from 'react';

import style from './Logo.module.scss';
import logo from '../../../assets/images/logo.svg';

const Logo: FC = () => {
  return <img src={logo} alt="Logo" className={style.logo} />;
};

export default Logo;
