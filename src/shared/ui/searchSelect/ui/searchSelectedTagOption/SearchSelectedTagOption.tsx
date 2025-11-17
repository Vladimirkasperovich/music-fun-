import type { FC } from 'react';
import RemoveTag from '../../assets/removeTag.svg';
import s from './SearchSelectedTagOption.module.scss';

interface SearchSelectItemProps {
    name: string;
    handleRemove: () => void;
}
export const SearchSelectedTagOption: FC<SearchSelectItemProps> = ({ name, handleRemove }) => {
    return (
        <li className={s.container}>
            <span className={s.name}>#{name}</span>
            <button className={s.removeTag} onClick={handleRemove}>
                <RemoveTag className={s.icon} />
            </button>
        </li>
    );
};
