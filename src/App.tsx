import React, { useEffect } from 'react';
import { useTelegram } from './hooks';
import { Header } from './ui/Header';
import { Form } from './Components/Form';
import { Deposit } from './Components/Deposit';
import { Withdraw } from './Components/Withdraw';

const App = () => {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.expand();
        // eslint-disable-next-line
    }, [])

  return (
    <div className="App">
        <h1>Crypto Transaction App</h1>
        <Deposit />
        <Withdraw />
    </div>
  );
};

export default App;
