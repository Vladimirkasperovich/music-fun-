import { Fragment } from 'react';
import { NAV_ITEMS } from '@/widgets/sidebar/constants';
import { Link } from 'react-router';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
    const lastIndex = NAV_ITEMS.length - 1;
    return (
        <nav className={s.container} aria-label="Main navigation">
            <ul className={s.list} role="menu">
                {NAV_ITEMS.map(({ id, icon: Icon, title, path }, index) => (
                    <Fragment key={id}>
                        <li role="menuitem">
                            <Link to={path} className={s.item}>
                                <Icon className={s.icon} aria-hidden="true" />
                                <span className={s.title}>{title}</span>
                            </Link>
                        </li>

                        {(index + 1) % 2 === 0 && lastIndex !== index && (
                            <li className={s.separator} aria-hidden="true" />
                        )}
                    </Fragment>
                ))}
            </ul>
        </nav>
    );
};
