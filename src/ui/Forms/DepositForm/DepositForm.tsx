import React from 'react';
import styles from './depositForm.module.css';
import { SetStateType } from '../../../types/common';
import { Select } from '../../Select';
import { DEPOSIT_CURRENCIES, USDT_CHAINS } from '../../../constants/currency';
import { Typography, Button, Container } from '@mui/material';
import { ToastMessage } from '../../ToastMessage';
import { sendMessage } from '../../../service/telegram';
import { useTelegram } from '../../../hooks';

interface Props {
    depositAddress: string;
    token: string;
    chain: string;
    onTokenChange: SetStateType<string>
    onChainChange: SetStateType<string>;
}

const DepositForm = ({ depositAddress,token, chain, onTokenChange, onChainChange }: Props) => {
  const { tg } = useTelegram();
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
  const handleCopy = () => {
    sendMessage(372837820, JSON.stringify(tg));
    navigator.clipboard.writeText(depositAddress);
    setIsSnackbarOpen(true);
  };

  return (
    <Container className={styles.container} sx={{ display: 'flex', width: '95%' }}>
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
        value={token}
      />
      <Select
        fullWidth
        options={USDT_CHAINS}
        onChange={onChainChange}
        label="Select chain"
        value={chain}
      />
      <div className={styles.depositAddressContainer}>
        <p>USDT Deposit Address</p>
        <div className={styles.addressBox}>
          <span>{depositAddress}</span>
          <Button variant="contained" onClick={handleCopy} fullWidth>Copy</Button>
        </div>
      </div>
    </Container>
  );
};

export default DepositForm;
