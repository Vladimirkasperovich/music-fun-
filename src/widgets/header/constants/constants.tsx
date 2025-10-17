import type { NavItem } from '@/shared/types';
import UserProfile from '@/widgets/header/assets/userProfile.svg';
import Logout from '@/widgets/header/assets/logout.svg';

export const TOOLTIP_ITEMS: NavItem[] = [
    { id: 1, icon: UserProfile, title: 'My profile' },
    { id: 2, icon: Logout, title: 'Logout' },
];
