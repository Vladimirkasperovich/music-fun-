import { type RefObject, useCallback, useState } from 'react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick.ts';

interface UseDropdownReturn<T extends HTMLElement> {
    isOpen: boolean;
    toggleDropDown: () => void;
    closeDropdown: () => void;
    outsideClickRef: RefObject<T | null>;
}
export const useDropdown = <T extends HTMLElement>(): UseDropdownReturn<T> => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => setIsOpen((prevState) => !prevState);
    const closeDropdown = useCallback(() => setIsOpen(false), []);
    const outsideClickRef = useOutsideClick<T>(closeDropdown);
    return { isOpen, toggleDropDown, outsideClickRef, closeDropdown };
};
