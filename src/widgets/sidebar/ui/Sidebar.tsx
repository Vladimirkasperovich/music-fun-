import { Fragment } from 'react';
import { NAV_ITEMS } from '@/widgets/sidebar/constants';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
    const lastIndex = NAV_ITEMS.length - 1;
    return (
        <nav className={s.container}>
            <ul className={s.list}>
                {NAV_ITEMS.map(({ id, icon: Icon, title }, index) => (
                    <Fragment key={id}>
                        <li className={s.item}>
                            <Icon className={s.icon} />
                            <span className={s.title}>{title}</span>
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
