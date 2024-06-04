import React, { useEffect } from 'react';
import { useTelegram } from './hooks';
import { Deposit } from './components/Deposit';
import { Withdraw } from './components/Withdraw';
import { Header } from './ui/Header';

const App = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.expand();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Crypto Transaction App</h1>
      <Deposit />
      <Withdraw />
    </div>
  );
};

export default App;
