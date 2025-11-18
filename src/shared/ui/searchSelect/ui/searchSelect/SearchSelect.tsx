import { memo } from 'react';
import SelectOpen from '../../assets/selectOpen.svg';
import SelectClose from '../../assets/selectClose.svg';
import { SearchSelectedTagList, SearchSelectList } from '@/shared/ui/searchSelect/ui';
import type { NamedEntity } from '@/shared/types';
import { useSearchSelect } from '@/shared/ui/searchSelect/hooks/useSearchSelect.ts';
import s from './SearchSelect.module.scss';

interface SearchSelectProps<T extends NamedEntity> {
    items: T[];
}
export const SearchSelect = memo(<T extends NamedEntity>({ items }: SearchSelectProps<T>) => {
    const {
        searchValue,
        handleSearchChange,
        handleRemoveTag,
        isOpen,
        toggleItemSelection,
        toggleDropdown,
        checkOutsideClickRef,
        selectedList,
        selectedItems,
    } = useSearchSelect<T>();

    return (
        <div className={s.container} ref={checkOutsideClickRef}>
            <div className={s.searchContainer}>
                <SearchSelectedTagList handleRemove={handleRemoveTag} options={selectedList} />

                <input
                    type="text"
                    className={s.search}
                    ref={(ref) => ref?.focus()}
                    onChange={handleSearchChange}
                    value={searchValue}
                    aria-label="search tag"
                    disabled={selectedList.length === 5}
                />
                <button
                    type="button"
                    onClick={toggleDropdown}
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
                <SearchSelectList<T>
                    options={items}
                    toggleItemSelection={toggleItemSelection}
                    selectedItems={selectedItems}
                />
            )}
        </div>
    );
});
