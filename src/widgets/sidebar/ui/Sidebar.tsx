import { NAV_ITEMS } from '@/widgets/sidebar/constants';
import { Link } from 'react-router';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
    const lastIndex = NAV_ITEMS.length - 1;
    return (
        <nav className={s.container} aria-label="Main navigation">
            <ul className={s.list} role="menu">
                {NAV_ITEMS.map(({ id, icon: Icon, title, path }, index) => (
                    <Link key={id} to={path ? path : '#'}>
                        <li className={s.item} role="menuitem">
                            <Icon className={s.icon} aria-hidden="true" />
                            <span className={s.title}>{title}</span>
                        </li>
                        {(index + 1) % 2 === 0 && lastIndex !== index && (
                            <li className={s.separator} aria-hidden="true" />
                        )}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
