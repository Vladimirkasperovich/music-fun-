import { type FC } from 'react';
import ArrowOpen from '@/shared/assets/icons/tooltipOpen.svg';
import ArrowClose from '@/shared/assets/icons/tooltipClose.svg';
import type { SelectItem } from '@/features/playlists/types';
import { useDropdown } from '@/shared/hooks';
import { clsx } from 'clsx';
import s from './PlaylistSelect.module.scss';

interface PlaylistSelectProps {
    options: SelectItem[];
    onSelect: (value: SelectItem) => void;
    value: SelectItem;
}
export const PlaylistSelect: FC<PlaylistSelectProps> = ({ options, onSelect, value }) => {
    const { isOpen, closeDropdown, toggleDropDown, outsideClickRef } =
        useDropdown<HTMLDivElement>();

    const selectItemHandler = (item: SelectItem) => {
        onSelect(item);
        closeDropdown();
    };

    return (
        <div className={s.container} ref={outsideClickRef}>
            <div className={s.selectHeader}>
                <span className={s.sortBy}>Sort By</span>
                <span className={s.title}>{value.title}</span>
                <button
                    onClick={toggleDropDown}
                    aria-expanded={isOpen}
                    type="button"
                    aria-haspopup="menu"
                    aria-controls="playlist-sort"
                    aria-label="Toggle playlist sorting options"
                >
                    {isOpen ? (
                        <ArrowOpen className={s.icon} aria-hidden />
                    ) : (
                        <ArrowClose className={s.icon} aria-hidden />
                    )}
                </button>
            </div>

            <ul
                className={clsx(s.list, isOpen && s.open)}
                role="menu"
                id="playlist-sort"
                aria-label="playlist select"
            >
                {options.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => selectItemHandler(item)}
                        className={s.item}
                        role="menuitem"
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
