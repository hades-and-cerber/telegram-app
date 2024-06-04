import React from 'react';
import styles from './header.module.css';
import { useTelegram } from '../../hooks';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';

const Header = () => {
  const { user } = useTelegram();

  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <Typography variant="body1">{user?.first_name}</Typography>
        <Typography variant="body2">Balance: ${15}</Typography>
        <ButtonGroup>
          <Button color="inherit" size="small">Deposit</Button>
          <Button color="inherit" size="small">Withdraw</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
