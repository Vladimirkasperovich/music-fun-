import { useState } from 'react';
import { TOOLTIP_ITEMS } from '@/widgets/header/constants';
import TooltipOpen from '@/widgets/header/assets/tooltipOpen.svg';
import TooltipClose from '@/widgets/header/assets/tooltipClose.svg';
import s from './Tooltip.module.scss';

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
