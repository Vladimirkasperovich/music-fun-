import { useState } from 'react';
import type { NavItem } from '@/shared/types';
import TooltipOpen from '@/widgets/header/assets/tooltipOpen.svg';
import TooltipClose from '@/widgets/header/assets/tooltipClose.svg';
import UserProfile from '@/widgets/header/assets/userProfile.svg';
import Logout from '@/widgets/header/assets/logout.svg';
import s from './Tooltip.module.scss';

const TOOLTIP_ITEMS: NavItem[] = [
    { id: 1, icon: UserProfile, title: 'My profile' },
    { id: 2, icon: Logout, title: 'Logout' },
];

export const Tooltip = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prevState) => !prevState);

    return (
        <div className={s.container}>
            <button type="button" onClick={toggle}>
                {isOpen ? (
                    <TooltipOpen className={s.arrow} />
                ) : (
                    <TooltipClose className={s.arrow} />
                )}
            </button>

            {isOpen && (
                <ul className={s.list}>
                    {TOOLTIP_ITEMS.map(({ id, icon: Icon, title }) => (
                        <li key={id} className={s.item}>
                            <Icon className={s.icon} />
                            <span className={s.title}>{title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
