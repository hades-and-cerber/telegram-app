import React from 'react';
import styles from 'heaser.module.css';
import { Button} from "../Button";
import {useTelegram} from "../../hooks";

const Header = () => {
    const { onClose, user } = useTelegram();

    return (
        <div className={styles.header}>
            <Button text={"Close"} onClick={onClose} />
            <span className={styles.username}>{ user?.username }</span>
        </div>
    );
};

export default Header;
