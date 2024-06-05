import React from 'react';
import styles from './header.module.css';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
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
