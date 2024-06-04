import React, { useState, useEffect } from 'react';
import { DepositForm } from '../../ui/Forms/DepositForm';
import { getDepositAddress } from '../../service/payment';
import { DEFAULT_CHAIN, DEFAULT_CURRENCY } from '../../constants/currency';
import { ToastMessage } from '../../ui/ToastMessage';

const Deposit: React.FC = () => {
  const [token, setToken] = useState<string>(DEFAULT_CURRENCY.value);
  const [chain, setChain] = useState<string>(DEFAULT_CHAIN.value);
  const [depositAddress, setDepositAddress] = useState<string>('');
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  const getDeposit = async (token: string, chain: string) => {
    try {
      const response = await getDepositAddress(token, chain);
      setDepositAddress(response.deposit_address);
    } catch (error) {
      setIsSnackbarOpen(true);
    }
  };

  useEffect(() => {
    getDeposit(token, chain);
  }, [token, chain]);

  return (<>
    <ToastMessage
      isOpen={isSnackbarOpen}
      handleClose={() => setIsSnackbarOpen(false)}
      variant="error"
      text="Something went wrong"
    />
    <DepositForm
      depositAddress={depositAddress}
      onChainChange={setChain}
      onTokenChange={setToken}
    />
  </>);
};

export default Deposit;
