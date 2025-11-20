import type { NamedEntity } from '@/shared/types';
import { SearchSelectedTagOption } from '@/shared/ui/searchSelect/ui';
import { memo } from 'react';
import s from './SearchSelectedTagList.module.scss';

interface SearchSelectedTagListProps<T extends NamedEntity> {
    options: T[];
    handleRemove: (id: string) => void;
    maxSelected: number;
}
export const SearchSelectedTagList = memo(
    <T extends NamedEntity>({
        options,
        handleRemove,
        maxSelected,
    }: SearchSelectedTagListProps<T>) => {
        return (
            <ul className={s.selectedList} aria-label="search tag" role="list" id="search-tag-list">
                {options.map(
                    ({ id, name }, index) =>
                        index < maxSelected && (
                            <SearchSelectedTagOption
                                key={id}
                                name={name}
                                handleRemove={() => handleRemove(id)}
                            />
                        ),
                )}
            </ul>
        );
    },
);
