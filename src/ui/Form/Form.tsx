import React, { useState } from 'react';
import styles from './form.module.css'
import {useTelegram} from "../../hooks";
import {Button} from "../Button";
import {sendMessage} from "../../service/telegram";

const Form = () => {
    const [inputText, setInputText] = useState<string>('');
    const { user, onClose } = useTelegram();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!user) return
        await sendMessage(user?.id, inputText);
        onClose();
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <label htmlFor="wish">What would you like this bot to do for you ?</label>
            <input
                className={styles.input}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                id="wish"
                max="20"
            />
            <Button type="submit" text="Send" />
        </form>
    );
};

export default Form;
