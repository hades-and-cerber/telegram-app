import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <Header />
        <Routes>
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/" element={<Deposit />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
