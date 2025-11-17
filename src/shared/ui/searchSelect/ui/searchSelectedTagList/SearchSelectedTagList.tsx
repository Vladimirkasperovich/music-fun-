import type { NamedEntity } from '@/shared/types';
import { SearchSelectedTagOption } from '@/shared/ui/searchSelect/ui';
import { memo } from 'react';
import s from './SearchSelectedTagList.module.scss';

interface SearchSelectedTagListProps<T extends NamedEntity> {
    options: T[];
    handleRemove: (id: string) => void;
}
export const SearchSelectedTagList = memo(
    <T extends NamedEntity>({ options, handleRemove }: SearchSelectedTagListProps<T>) => {
        return (
            <ul className={s.selectedList}>
                {options.map(({ id, name }) => (
                    <SearchSelectedTagOption
                        key={id}
                        name={name}
                        handleRemove={() => handleRemove(id)}
                    />
                ))}
            </ul>
        );
    },
);
