import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Deposit: React.FC = () => {
    const [token, setToken] = useState<string>('USDT');
    const [chain, setChain] = useState<string>('TRC20');
    const [depositAddress, setDepositAddress] = useState<string>('');

    useEffect(() => {
        const fetchDepositAddress = async () => {
            try {
                const response = await axios.post('http://localhost:3000/api/deposit', {
                    userId: 1,
                    token,
                    chain,
                });
                setDepositAddress(response.data.deposit_address);
            } catch (error) {
                console.error('Error initiating deposit:', error);
            }
        };

        fetchDepositAddress();
    }, [token, chain]);

    const handleCopy = () => {
        navigator.clipboard.writeText(depositAddress);
        alert('Address copied to clipboard');
    };

    return (
        <div className="container">
            <h2>Deposit</h2>
            <p>Select the token to deposit (Min 2.0 USDT)</p>
            <select value={token} onChange={(e) => setToken(e.target.value)}>
                <option value="USDT">USDT</option>
            </select>
            <select value={chain} onChange={(e) => setChain(e.target.value)}>
                <option value="TRC20">USDT-TRON (TRC20)</option>
                <option value="ERC20">USDT-Ethereum (ERC20)</option>
            </select>
            <div className="deposit-address-container">
                <p>USDT Deposit Address</p>
                <div className="address-box">
                    <span>{depositAddress}</span>
                    <button onClick={handleCopy}>Copy</button>
                </div>
            </div>
        </div>
    );
};

export default Deposit;
