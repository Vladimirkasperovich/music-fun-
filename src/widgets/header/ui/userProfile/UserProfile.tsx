import { Tooltip } from '@/widgets/header/ui/tooltip/ui/tooltip/Tooltip.tsx';
import s from './UserProfile.module.scss';

export const UserProfile = () => {
    return (
        <section className={s.container}>
            <img
                src="src/widgets/header/assets/userPhoto.svg"
                alt="user icon"
                className={s.image}
            />
            <h1 className={s.username}>Dima Kuzyberdin</h1>
            <Tooltip />
        </section>
    );
};
