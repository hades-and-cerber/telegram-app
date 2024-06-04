import React from 'react';
import styles from './select.module.css';
import { ISelect } from '../../types/common';

interface Props {
    options: ISelect[];
    onChange: (value: string) => void;
}

const Select = ({ options, onChange }: Props) => {
  return (
    <select className={styles.select} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
