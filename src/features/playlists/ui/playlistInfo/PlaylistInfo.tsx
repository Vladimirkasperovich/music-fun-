import type { FC } from 'react';
import Ellipse from '@/features/playlists/assets/ellipse.svg';
import { calculateCreatedAt } from '@/features/playlists/utils/calculateCreatedAt.ts';
import s from './PlaylistInfo.module.scss';

interface PlaylistMetaProps {
    title: string;
    username: string;
    createdAt: string;
    className?: string;
}

export const PlaylistInfo: FC<PlaylistMetaProps> = ({ createdAt, title, username, className }) => {
    const playlistCreatedAt = calculateCreatedAt(createdAt);

    return (
        <section className={className} aria-labelledby="playlist-title">
            <h2 id="playlist-title" className={s.title}>
                {title}
            </h2>
            <p className={s.madeFor}>
                Made for <span className={s.username}>{username}</span>
            </p>
            {/*Todo: need to fix hardcode count of playlists*/}
            <p className={s.createdAt}>
                <span aria-label="playlists count"> 23 Tracks</span>
                <Ellipse className={s.icon} aria-hidden="true" />
                {playlistCreatedAt}
            </p>
        </section>
    );
};
