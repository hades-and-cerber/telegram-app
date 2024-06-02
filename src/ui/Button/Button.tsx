import React from "react";
import styles from './button.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    text: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ text, ...buttonProps }: Props) => {
    return(
        <button {...buttonProps} className={styles.button}></button>
    )
}

export default Button;
