import React, { useState } from 'react';
import axios from 'axios';

const Withdraw: React.FC = () => {
    const [token, setToken] = useState<string>('USDT');
    const [chain, setChain] = useState<string>('TRC20');
    const [amount, setAmount] = useState<string>('');
    const [withdrawalAddress, setWithdrawalAddress] = useState<string>('');

    const handleWithdraw = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/withdraw', {
                userId: 1, // assuming a logged-in user with ID 1
                token,
                chain,
                amount: parseFloat(amount),
                withdrawalAddress,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error processing withdrawal:', error);
        }
    };

    return (
        <div>
            <h2>Withdraw</h2>
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
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Withdrawal Address"
                value={withdrawalAddress}
                onChange={(e) => setWithdrawalAddress(e.target.value)}
            />
            <br />
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
};

export default Withdraw;
