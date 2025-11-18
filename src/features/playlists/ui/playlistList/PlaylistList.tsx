import { type FC, memo } from 'react';
import type { Playlist } from '@/features/playlists/types';
import { PlaylistItem } from '@/features/playlists/ui/playlistItem/PlaylistItem.tsx';
import s from './PlaylistList.module.scss';

interface PlaylistListProps {
    data: Playlist[];
}
export const PlaylistList: FC<PlaylistListProps> = memo(({ data }) => {
    return (
        <ul className={s.container} aria-label="new playlists" role="list" id="playlist-list">
            {data.map(({ id, attributes }) => (
                <PlaylistItem key={id} attributes={attributes} />
            ))}
        </ul>
    );
});
