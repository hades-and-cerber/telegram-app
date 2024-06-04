import type { Dispatch, SetStateAction } from 'react';

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export interface ISelect {
    value: string;
    label: string
}
