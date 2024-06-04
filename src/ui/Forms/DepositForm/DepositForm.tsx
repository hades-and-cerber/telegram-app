import React from 'react';
import styles from './depositForm.module.css';
import { SetStateType } from '../../../types/common';

interface Props {
    depositAddress: string;
    token: string;
    chain: string;
    onTokenChange: SetStateType<string>
    onChainChange: SetStateType<string>;
}

const DepositForm = ({ depositAddress, token, onTokenChange, onChainChange , chain }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
    alert('Address copied to clipboard');
  };

  return (
    <div className={styles.container}>
      <h2>Deposit</h2>
      <p>Select the token to deposit (Min 2.0 USDT)</p>
      <select value={token} onChange={(e) => onTokenChange(e.target.value)}>
        <option value="USDT">USDT</option>
      </select>
      <select value={chain} onChange={(e) => onChainChange(e.target.value)}>
        <option value="TRC20">USDT-TRON (TRC20)</option>
        <option value="ERC20">USDT-Ethereum (ERC20)</option>
      </select>
      <div className={styles.depositAddressContainer}>
        <p>USDT Deposit Address</p>
        <div className={styles.addressBox}>
          <span>{depositAddress}</span>
          <button onClick={handleCopy}>Copy</button>
        </div>
      </div>
    </div>
  );
};

export default DepositForm;
