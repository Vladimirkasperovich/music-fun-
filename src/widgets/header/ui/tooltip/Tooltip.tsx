import { useState } from 'react';
import { TOOLTIP_ITEMS } from '@/widgets/header/constants';
import TooltipOpen from '@/widgets/header/assets/tooltipOpen.svg';
import TooltipClose from '@/widgets/header/assets/tooltipClose.svg';
import s from './Tooltip.module.scss';

export const Tooltip = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prevState) => !prevState);

    return (
        <section className={s.container}>
            <button
                type="button"
                onClick={toggle}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls="profile-menu"
            >
                {isOpen ? (
                    <TooltipOpen className={s.arrow} />
                ) : (
                    <TooltipClose className={s.arrow} />
                )}
            </button>

            {isOpen && (
                <ul className={s.list} role="menu">
                    {TOOLTIP_ITEMS.map(({ id, icon: Icon, title }) => (
                        <li key={id} className={s.item} role="menuitem">
                            <Icon className={s.icon} aria-label={title} />
                            <span className={s.title}>{title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};
