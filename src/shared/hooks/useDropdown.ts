import { type RefObject, useCallback, useState } from 'react';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick.ts';

interface UseDropdownReturn {
    isOpen: boolean;
    toggleDropDown: () => void;
    outsideClickRef: RefObject<HTMLElement | null>;
    closeDropdown: () => void;
}
export const useDropdown = (): UseDropdownReturn => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => setIsOpen((prevState) => !prevState);
    const closeDropdown = useCallback(() => setIsOpen(false), []);
    const outsideClickRef = useOutsideClick(closeDropdown);
    return { isOpen, toggleDropDown, outsideClickRef, closeDropdown };
};
