import type { PlaylistWithTrack } from '@/features/track/types';
import type { FC } from 'react';
import { PlaylistsWithTracksItem } from '@/features/track/ui';
import s from './PlaylistsWithTracksList.module.scss';

interface PlaylistsWithTracksListProps {
    playlists: PlaylistWithTrack[];
}
export const PlaylistsWithTracksList: FC<PlaylistsWithTracksListProps> = ({ playlists }) => {
    return (
        <ul className={s.trackPagePlaylistList} role="list">
            {playlists.map((playlist) => (
                <PlaylistsWithTracksItem playlist={playlist} />
            ))}
        </ul>
    );
};
