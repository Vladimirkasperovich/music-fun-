import { useCallback, useState } from 'react';
import { TOOLTIP_ITEMS } from '@/widgets/header/constants';
import TooltipOpen from '@/shared/assets/icons/tooltipOpen.svg';
import TooltipClose from '@/shared/assets/icons/tooltipClose.svg';
import { useOutsideClick } from '@/shared/hooks';
import { Link } from 'react-router';
import { clsx } from 'clsx';
import s from './Tooltip.module.scss';

export const Tooltip = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prevState) => !prevState);
    const closeTooltip = useCallback(() => setIsOpen(false), []);
    const containerRef = useOutsideClick<HTMLElement>(closeTooltip);

    return (
        <section className={s.container} ref={containerRef}>
            <button
                type="button"
                onClick={toggle}
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

            <ul className={clsx(s.list, isOpen && s.open)} role="menu" id="profile-menu">
                {TOOLTIP_ITEMS.map(({ id, icon: Icon, title, path }) => (
                    <li key={id} role="menuitem">
                        <Link to={path} className={s.item} onClick={() => setIsOpen(false)}>
                            <Icon className={s.icon} aria-label={title} />
                            <span className={s.title}>{title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};
