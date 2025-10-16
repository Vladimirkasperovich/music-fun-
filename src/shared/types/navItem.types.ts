import type { FC, SVGProps } from 'react';

export interface NavItem {
    id: number;
    icon: FC<SVGProps<SVGElement>>;
    title: string;
}
