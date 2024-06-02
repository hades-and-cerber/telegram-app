import React from 'react';
import styles from './header.module.css';
import { Button} from "../Button";
import {useTelegram} from "../../hooks";

const Header = () => {
    const { onClose, user } = useTelegram();

    return (
        <div className={styles.header}>
            <Button text={"Close"} onClick={onClose} />
            <span className={styles.username}>{ user?.id }</span>
        </div>
    );
};

export default Header;
