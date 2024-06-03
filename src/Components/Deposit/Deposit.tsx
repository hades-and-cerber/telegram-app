import React, { useState } from 'react';
import axios from 'axios';

const Deposit: React.FC = () => {
    const [token, setToken] = useState<string>('USDT');
    const [chain, setChain] = useState<string>('TRC20');
    const [depositAddress, setDepositAddress] = useState<string>('');

    const handleDeposit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/deposit', {
                userId: 1, // assuming a logged-in user with ID 1
                token,
                chain,
            });
            setDepositAddress(response.data.deposit_address);
        } catch (error) {
            console.error('Error initiating deposit:', error);
        }
    };

    return (
        <div>
            <h2>Deposit</h2>
            <p>Select the token to deposit (Min 2.0 USDT)</p>
            <select value={token} onChange={(e) => setToken(e.target.value)}>
                <option value="USDT">USDT</option>
                {/* Add more options if needed */}
            </select>
            <br />
            <select value={chain} onChange={(e) => setChain(e.target.value)}>
                <option value="TRC20">USDT-TRON (TRC20)</option>
                <option value="ERC20">USDT-Ethereum (ERC20)</option>
            </select>
            <br />
            <button onClick={handleDeposit}>Get Deposit Address</button>
            {depositAddress && (
                <div>
                    <p>Deposit Address:</p>
                    <p>{depositAddress}</p>
                </div>
            )}
        </div>
    );
};

export default Deposit;
