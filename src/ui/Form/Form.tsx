import React, { useState } from 'react';
import styles from './form.module.css'
import { Button } from "../Button";

interface Props {
    onSubmit: (inputText: string) => void;

}

const Form = ({ onSubmit }: Props) => {
    const [inputText, setInputText] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(inputText);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
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
