import React, { useState, useEffect } from 'react';
import { DepositForm } from '../../ui/Forms/DepositForm';
import { getDepositAddress } from '../../service/payment';

const Deposit: React.FC = () => {
  const [token, setToken] = useState<string>('USDT');
  const [chain, setChain] = useState<string>('TRC20');
  const [depositAddress, setDepositAddress] = useState<string>('');

  const getDeposit = async (token: string, chain: string) => {
    try {
      const response = await getDepositAddress(token, chain);
      setDepositAddress(response.deposit_address);
    } catch (error) {
      console.error('Error initiating deposit:', error);
    }
  };

  useEffect(() => {
    getDeposit(token, chain);
  }, [token, chain]);

  return (
    <DepositForm
      depositAddress={depositAddress}
      onChainChange={setChain}
      onTokenChange={setToken}
    />
  );
};

export default Deposit;
