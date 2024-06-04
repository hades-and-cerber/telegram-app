import React from 'react';
import styles from './button.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    text: string;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ text, fullWidth, ...buttonProps }: Props) => {
  return(
    <button {...buttonProps} className={`${styles.button} ${fullWidth ? styles.fullWidth : ''}`}>{text}</button>
  );
};

export default Button;
