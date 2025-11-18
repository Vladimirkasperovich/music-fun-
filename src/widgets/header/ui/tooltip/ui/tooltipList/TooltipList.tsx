import type { NavItem } from '@/shared/types';
import { type FC, memo } from 'react';
import { TooltipItem } from '@/widgets/header/ui/tooltip/ui/tooltipItem/TooltipItem.tsx';

interface TooltipListProps {
    className: string;
    list: NavItem[];
    callback: () => void;
}

export const TooltipList: FC<TooltipListProps> = memo(({ list, className, callback }) => {
    return (
        <ul className={className} role="menu" id="profile-menu">
            {list.map(({ id, icon, title, path }) => (
                <TooltipItem key={id} Icon={icon} onClick={callback} title={title} path={path} />
            ))}
        </ul>
    );
});
