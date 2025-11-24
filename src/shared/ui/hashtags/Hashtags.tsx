import type { FC } from 'react';
import type { NamedEntity } from '@/shared/types';
import s from './Hashtags.module.scss';

interface HashtagsProps {
    hashtags: NamedEntity[];
}
export const Hashtags: FC<HashtagsProps> = ({ hashtags }) => {
    return (
        <ul className={s.list} role="list">
            {hashtags.map(({ id, name }) => (
                <li key={id} className={s.item}>
                    {name}
                </li>
            ))}
        </ul>
    );
};
