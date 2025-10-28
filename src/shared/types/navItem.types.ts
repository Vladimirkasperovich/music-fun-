import type { FC, SVGProps } from 'react';
import type { Route } from '@/shared/config/routes.ts';

export interface NavItem {
    id: number;
    icon: FC<SVGProps<SVGElement>>;
    title: string;
    path: Route;
}
