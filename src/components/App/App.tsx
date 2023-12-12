import React, { FC } from 'react';

import Logo from '../UI/Logo/Logo';
import TransferFilter from '../TransferFilter/TransferFilter';
import TicketsSort from '../TicketsSort/TicketsSort';
import TicketsList from '../TicketsList/TicketsList';

import style from './App.module.scss';

const App: FC = () => {
  return (
    <main className={style.main}>
      <Logo />
      <div className={style.main__wrapper}>
        <TransferFilter />
        <div>
          <TicketsSort />
          <TicketsList />
        </div>
      </div>
    </main>
  );
};

export default App;
