import TooltipOpen from '@/shared/assets/icons/tooltipOpen.svg';
import TooltipClose from '@/shared/assets/icons/tooltipClose.svg';
import { useDropdown } from '@/shared/hooks';
import { clsx } from 'clsx';
import { TooltipList } from '@/widgets/header/ui/tooltip/ui/tooltipList/TooltipList.tsx';
import { TOOLTIP_ITEMS } from '@/widgets/header/constants';
import s from './Tooltip.module.scss';

export const Tooltip = () => {
    const { isOpen, toggleDropDown, outsideClickRef, closeDropdown } = useDropdown();

    return (
        <section className={s.container} ref={outsideClickRef}>
            <button
                type="button"
                onClick={toggleDropDown}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls="profile-menu"
                aria-label={isOpen ? 'Close profile menu' : 'Open profile menu'}
            >
                {isOpen ? (
                    <TooltipOpen className={s.arrow} aria-hidden />
                ) : (
                    <TooltipClose className={s.arrow} aria-hidden />
                )}
            </button>

            <TooltipList
                className={clsx(s.list, isOpen && s.open)}
                list={TOOLTIP_ITEMS}
                callback={closeDropdown}
            />
        </section>
    );
};
