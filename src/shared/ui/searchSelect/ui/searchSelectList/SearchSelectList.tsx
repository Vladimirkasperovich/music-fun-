import type { NamedEntity } from '@/shared/types';
import { SearchSelectOption } from '@/shared/ui/searchSelect/ui';
import type { JSX } from 'react';
import { memo } from 'react';
import s from './SearchSelectList.module.scss';

interface SearchSelectListProps<T extends NamedEntity> {
    options: T[];
    toggleItemSelection: (option: T) => void;
    selectedItems: Map<string, T>;
}
export const SearchSelectListComponent = <T extends NamedEntity>({
    options,
    toggleItemSelection,
    selectedItems,
}: SearchSelectListProps<T>) => {
    return (
        <ul className={s.list}>
            {options.map((option) => (
                <SearchSelectOption
                    key={option.id}
                    onChange={() => toggleItemSelection(option)}
                    isChecked={selectedItems.has(option.id)}
                    name={option.name}
                />
            ))}
        </ul>
    );
};
export const SearchSelectList = memo(SearchSelectListComponent) as <T extends NamedEntity>(
    props: SearchSelectListProps<T>,
) => JSX.Element;
