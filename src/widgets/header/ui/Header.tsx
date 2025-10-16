import { UserProfile } from '@/widgets/header/ui/userProfile/UserProfile.tsx';
import { useState } from 'react';
import s from './Header.module.scss';

export const Header = () => {
    const [isAuth] = useState(true);
    return (
        <header className={s.container}>
            {isAuth ? (
                <UserProfile />
            ) : (
                <button className={s.authButton}>Sign up with APIHUB</button>
            )}
        </header>
    );
};
