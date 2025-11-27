import type { FC } from 'react';
import type { PlaylistWithTrack } from '@/features/track/types';
import s from './PlaylistsWithTracksItem.module.scss';

interface PlaylistsWithTracksItemProps {
    playlist: PlaylistWithTrack;
}
export const PlaylistsWithTracksItem: FC<PlaylistsWithTracksItemProps> = ({ playlist }) => {
    return (
        <li key={playlist.id} className={s.trackPagePlaylistItem}>
            <div className={s.trackPagePlaylistImageWrapper}>
                <img
                    src={playlist.image}
                    alt="cover"
                    className={s.trackPagePlaylistImage}
                    loading="lazy"
                />
            </div>

            <div className={s.trackPagePlaylistInfo}>
                <span className={s.trackPagePlaylistTitle}>{playlist.title}</span>
                <span className={s.trackPagePlaylistOwner}>{playlist.owner}</span>
            </div>

            <span className={s.trackPagePlaylistTrackCount}>{playlist.tracksCount} Tracks</span>
        </li>
    );
};
