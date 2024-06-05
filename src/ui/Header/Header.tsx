import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';

const Header = () => {

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <Typography variant="body2">Balance: ${15}</Typography>
        <ButtonGroup>
          <Button color="inherit" size="small" onClick={() => navigate('/deposit')}>Deposit</Button>
          <Button color="inherit" size="small" onClick={() => navigate('/withdraw')}>Withdraw</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
