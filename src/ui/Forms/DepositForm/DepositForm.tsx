import React from 'react';
import styles from './depositForm.module.css';
import { SetStateType } from '../../../types/common';
import { Select } from '../../Select';
import { DEPOSIT_CURRENCIES, USDT_CHAINS } from '../../../constants/currency';
import { Typography, Container, CircularProgress } from '@mui/material';
import { CryptoAddressBox } from '../../CryptoAddressBox';

interface Props {
    depositAddress: string;
    token: string;
    chain: string;
    onTokenChange: SetStateType<string>
    onChainChange: SetStateType<string>;
}

const DepositForm = ({ depositAddress,token, chain, onTokenChange, onChainChange }: Props) => {
  return (
    <Container className={styles.container} sx={{ display: 'flex', width: '95%' }}>
      <Typography variant="h4" align="center" >Deposit💰</Typography>
      <Typography align="center" >Select the token to deposit (Min 2.0 USDT)</Typography>
      <Select
        fullWidth
        options={DEPOSIT_CURRENCIES}
        onChange={onTokenChange}
        label="Currency"
        value={token}
      />
      <Select
        fullWidth
        options={USDT_CHAINS}
        onChange={onChainChange}
        label="Chain"
        value={chain}
      />
      <div className={styles.depositAddressContainer}>
        <p>USDT Deposit Address</p>
        {depositAddress ? <CryptoAddressBox address={depositAddress} /> : <CircularProgress />}
      </div>
    </Container>
  );
};

export default DepositForm;
