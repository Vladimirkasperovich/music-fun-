import { useContext, useState } from 'react';
import { UserProfile } from '@/widgets/header/ui/userProfile/UserProfile.tsx';
import { ModalContext } from '@/app/providers/modal';
import s from './Header.module.scss';

export const Header = () => {
    const [isAuth] = useState(true);
    const { openModal } = useContext(ModalContext);
    return (
        <header className={s.container}>
            {isAuth ? (
                <UserProfile />
            ) : (
                <button type="button" className={s.authButton} onClick={() => openModal('auth')}>
                    Sign up with APIHUB
                </button>
            )}
        </header>
    );
};
