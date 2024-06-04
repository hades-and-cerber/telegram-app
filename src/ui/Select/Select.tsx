import React from 'react';
import { ISelect } from '../../types/common';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { FormControl, InputLabel, MenuItem, Select as SelectMUI } from '@mui/material';
import { useTelegram } from '../../hooks';

interface Props {
    options: ISelect[];
    onChange: (value: string) => void;
    label: string;
    fullWidth?: boolean;
    value?: string;
}

const Select = ({ options, onChange, value, label, fullWidth }: Props) => {
  const { tg } = useTelegram();
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (<FormControl variant="filled" fullWidth={fullWidth}>
    <InputLabel
      style={{ color: tg.themeParams.hint_color }}
      id={label}
    >
      {label || 'Select'}
    </InputLabel>
    <SelectMUI
      value={value}
      label={label || 'Select'}
      onChange={handleChange}
      id={label}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SelectMUI>
  </FormControl>);
};

export default Select;
