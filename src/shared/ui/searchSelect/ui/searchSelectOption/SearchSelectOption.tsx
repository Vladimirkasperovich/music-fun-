import type { FC } from 'react';
import s from './SearchSelectOption.module.scss';

interface SearchSelectOptionProps {
    onChange: () => void;
    name: string;
    isChecked: boolean;
}
export const SearchSelectOption: FC<SearchSelectOptionProps> = ({ name, isChecked, onChange }) => {
    return (
        <li className={s.item}>
            <input type="checkbox" className={s.checkbox} onChange={onChange} checked={isChecked} />
            <span className={s.name}>#{name}</span>
        </li>
    );
};
