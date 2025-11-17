import type { NamedEntity } from '@/shared/types';
import { type ChangeEvent, type RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { useOutsideClick } from '@/shared/hooks';

interface UseSearchSelectReturn<T extends NamedEntity> {
    isOpen: boolean;
    searchValue: string;
    toggleDropdown: () => void;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    toggleItemSelection: (item: T) => void;
    handleRemoveTag: (id: string) => void;
    checkOutsideClickRef: RefObject<HTMLDivElement | null>;
    selectedList: T[];
    selectedItems: Map<string, T>;
}
export const useSearchSelect = <T extends NamedEntity>(): UseSearchSelectReturn<T> => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedItems, setSelectedItems] = useState<Map<string, T>>(new Map());
    const selectedList = useMemo(() => [...selectedItems.values()], [selectedItems]);
    const checkOutsideClickRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

    const toggleDropdown = useCallback(() => setIsOpen((prevState) => !prevState), []);
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsOpen(true);
        setSearchValue(e.target.value);
    };

    const toggleItemSelection = useCallback((item: T) => {
        setSearchValue('');
        setSelectedItems((prevState) => {
            const map = new Map(prevState);
            if (map.has(item.id)) {
                map.delete(item.id);
            } else if (map.size < 5) {
                map.set(item.id, item);
            }
            return map;
        });
    }, []);
    const handleRemoveTag = useCallback((id: string) => {
        setSelectedItems((prevState) => {
            const map = new Map(prevState);
            if (map.has(id)) {
                map.delete(id);
            }
            return map;
        });
    }, []);

    useEffect(() => {
        if (selectedList.length === 5) {
            setIsOpen(false);
        }
    }, [selectedList]);

    return {
        handleRemoveTag,
        handleSearchChange,
        searchValue,
        isOpen,
        toggleDropdown,
        toggleItemSelection,
        checkOutsideClickRef,
        selectedList,
        selectedItems,
    };
};
