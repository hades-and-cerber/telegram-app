import React, { useEffect } from 'react';
import { useTelegram } from './hooks';
import { Deposit } from './components/Deposit';
import { Withdraw } from './components/Withdraw';
import { Header } from './ui/Header';
import { createMUITheme } from './themes/theme';
import { ThemeProvider } from '@mui/material';

const App = () => {
  const { tg } = useTelegram();
  const theme = createMUITheme(tg.themeParams, tg.colorScheme === 'dark');

  useEffect(() => {
    tg.ready();
    tg.expand();
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Deposit />
        <Withdraw />
      </div>
    </ThemeProvider>
  );
};

export default App;
