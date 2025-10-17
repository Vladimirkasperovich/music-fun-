import type { FC } from 'react';
import Ellipse from '@/features/playlists/assets/ellipse.svg';
import { calculateCreatedAt } from '@/features/playlists/utils/calculateCreatedAt.ts';
import s from './PlaylistMeta.module.scss';

interface PlaylistMetaProps {
    title: string;
    username: string;
    createdAt: string;
    className?: string;
}

export const PlaylistMeta: FC<PlaylistMetaProps> = ({ createdAt, title, username, className }) => {
    const playlistCreatedAt = calculateCreatedAt(createdAt);

    return (
        <div className={className}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.madeFor}>
                Made for <span className={s.username}>{username}</span>
            </p>
            {/*Todo: need to fix hardcode*/}
            <p className={s.createdAt}>
                23 Tracks
                <Ellipse className={s.icon} />
                {playlistCreatedAt}
            </p>
        </div>
    );
};
