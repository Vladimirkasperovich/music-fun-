import type { NavItem } from '@/shared/types';
import UserProfile from '@/widgets/header/assets/userProfile.svg';
import Logout from '@/widgets/header/assets/logout.svg';
import { Routes } from '@/shared/config';

export const TOOLTIP_ITEMS: NavItem[] = [
    { id: 1, icon: UserProfile, title: 'My profile', path: Routes.Profile },
    { id: 2, icon: Logout, title: 'Logout', path: Routes.Temporary },
];
