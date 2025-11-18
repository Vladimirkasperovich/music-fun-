import { Link } from 'react-router';
import type { FC, SVGProps } from 'react';
import s from './TooltipItem.module.scss';

interface TooltipItemProps {
    Icon: FC<SVGProps<SVGElement>>;
    onClick: () => void;
    title: string;
    path: string;
}
export const TooltipItem: FC<TooltipItemProps> = ({ onClick, Icon, title, path }) => {
    return (
        <li role="menuitem">
            <Link to={path} className={s.item} onClick={onClick}>
                <Icon className={s.icon} aria-label={title} />
                <span className={s.title}>{title}</span>
            </Link>
        </li>
    );
};
