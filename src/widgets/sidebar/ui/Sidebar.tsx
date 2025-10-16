import type { NavItem } from '@/shared/types';
import Home from '@/widgets/sidebar/assets/home.svg';
import Library from '@/widgets/sidebar/assets/yourLibrary.svg';
import CreatePlaylist from '@/widgets/sidebar/assets/createPlaylist.svg';
import UploadTrack from '@/widgets/sidebar/assets/uploadTrack.svg';
import AllTracks from '@/widgets/sidebar/assets/allTracks.svg';
import AllPlaylist from '@/widgets/sidebar/assets/allPlaylist.svg';
import s from './Sidebar.module.scss';
import { Fragment } from 'react';

const NAV_ITEMS: NavItem[] = [
    { id: 1, icon: Home, title: 'Home' },
    { id: 2, icon: Library, title: 'Your Library' },
    { id: 3, icon: CreatePlaylist, title: 'Create Playlist' },
    { id: 4, icon: UploadTrack, title: 'Upload Track' },
    { id: 5, icon: AllTracks, title: 'All Tracks' },
    { id: 6, icon: AllPlaylist, title: 'All Playlist' },
];

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
