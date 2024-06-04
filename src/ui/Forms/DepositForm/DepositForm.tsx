import React from 'react';
import styles from './depositForm.module.css';
import { SetStateType } from '../../../types/common';
import { Select } from '../../Select';
import { DEPOSIT_CURRENCIES, USDT_CHAINS } from '../../../constants/currency';
import { Typography, Button } from '@mui/material';
import { ToastMessage } from '../../ToastMessage';

interface Props {
    depositAddress: string;
    onTokenChange: SetStateType<string>
    onChainChange: SetStateType<string>;
}

const DepositForm = ({ depositAddress, onTokenChange, onChainChange }: Props) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
    setIsSnackbarOpen(true);
  };

  return (
    <div className={styles.container}>
      <ToastMessage
        isOpen={isSnackbarOpen}
        handleClose={() => setIsSnackbarOpen(false)}
        variant="success"
        text="Address copied to clipboard"
      />
      <Typography variant="h4" align="center" >Deposit</Typography>
      <Typography align="center" >Select the token to deposit (Min 2.0 USDT)</Typography>
      <Select
        fullWidth
        options={DEPOSIT_CURRENCIES}
        onChange={onTokenChange}
        label="Select currency"
      />
      <Select
        fullWidth
        options={USDT_CHAINS}
        onChange={onChainChange}
        label="Select chain"
      />
      <div className={styles.depositAddressContainer}>
        <p>USDT Deposit Address</p>
        <div className={styles.addressBox}>
          <span>{depositAddress}</span>
          <Button variant="contained" onClick={handleCopy} fullWidth>Copy</Button>
        </div>
      </div>
    </div>
  );
};

export default DepositForm;
