import React from 'react';
import styles from './header.module.css';
import { Button} from "../Button";
import {useTelegram} from "../../hooks";

const Header = () => {
    const { onClose, user } = useTelegram();

    return (
        <div className={styles.header}>
            <Button text={"Close"} onClick={onClose} />
            <span className={styles.username}>{ process.env.TELEGRAM_API_TOKEN?.[0] }</span>
        </div>
    );
};

export default Header;
