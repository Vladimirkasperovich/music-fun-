import { type FC, memo } from 'react';
import type { Playlist } from '@/features/playlists/types';
import { PlaylistItem } from '@/features/playlists/ui/playlistItem/PlaylistItem.tsx';
import { useNavigate } from 'react-router';
import s from './PlaylistList.module.scss';

interface PlaylistListProps {
    data: Playlist[];
}
export const PlaylistList: FC<PlaylistListProps> = memo(({ data }) => {
    const navigate = useNavigate();
    return (
        <ul className={s.container} aria-label="new playlists" role="list" id="playlist-list">
            {data.map(({ id, attributes }) => (
                <PlaylistItem
                    key={id}
                    attributes={attributes}
                    onClick={() => navigate(`/playlist/${id}`)}
                />
            ))}
        </ul>
    );
});
