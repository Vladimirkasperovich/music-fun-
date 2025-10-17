import { type FC, memo } from 'react';
import type { Playlist } from '@/features/playlists/types';
import { PlaylistCard } from '@/features/playlists/ui/playlistCard/PlaylistCard.tsx';
import s from './PlaylistList.module.scss';

interface PlaylistListProps {
    data: Playlist[];
}
export const PlaylistList: FC<PlaylistListProps> = memo(({ data }) => {
    return (
        <ul className={s.container}>
            {data.map(({ id, attributes }) => (
                <PlaylistCard key={id} attributes={attributes} />
            ))}
        </ul>
    );
});
