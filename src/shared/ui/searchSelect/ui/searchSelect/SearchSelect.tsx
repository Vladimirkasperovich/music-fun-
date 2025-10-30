import { type ChangeEvent, useState } from 'react';
import SelectOpen from '../../assets/selectOpen.svg';
import SelectClose from '../../assets/selectClose.svg';
import { SearchSelectedTag } from '@/shared/ui/searchSelect/ui';
import type { NamedEntity } from '@/shared/types';
import s from './SearchSelect.module.scss';

interface SearchSelectProps<T extends NamedEntity> {
    items: T[];
}
export const SearchSelect = <T extends NamedEntity>({ items }: SearchSelectProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedItems, setSelectedItems] = useState<Map<string, T>>(new Map());
    const selectedListItems = [...selectedItems.values()];

    const toggleSelect = () => setIsOpen((prevState) => !prevState);
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

    const toggleSelection = (item: T) => {
        setSelectedItems((prevState) => {
            const map = new Map(prevState);
            if (map.has(item.id)) {
                map.delete(item.id);
            } else {
                map.set(item.id, item);
            }
            return map;
        });
    };
    const handleRemoveTag = (id: string) => {
        setSelectedItems((prevState) => {
            const map = new Map(prevState);
            if (map.has(id)) {
                map.delete(id);
            }
            return map;
        });
    };

    return (
        <div className={s.container}>
            <div className={s.searchContainer}>
                <ul style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {selectedListItems.map(({ id, name }) => (
                        <SearchSelectedTag
                            key={id}
                            name={name}
                            handleRemove={() => handleRemoveTag(id)}
                        />
                    ))}
                </ul>

                <input
                    type="text"
                    className={s.search}
                    onChange={handleSearchChange}
                    value={searchValue}
                    aria-label="search tag"
                    placeholder="find a tag`s"
                />
                <button
                    type="button"
                    onClick={toggleSelect}
                    className={s.toggler}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-controls="select-menu"
                    aria-label={isOpen ? 'Close search select' : 'Open search select'}
                >
                    {isOpen ? (
                        <SelectClose className={s.icon} aria-hidden />
                    ) : (
                        <SelectOpen className={s.icon} aria-hidden />
                    )}
                </button>
            </div>
            {isOpen && (
                <ul className={s.list}>
                    {items.map((item) => (
                        <li key={item.id} className={s.item}>
                            <input
                                type="checkbox"
                                className={s.picker}
                                onChange={() => toggleSelection(item)}
                                checked={selectedItems.has(item.id)}
                            />
                            <span className={s.name}>#{item.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
