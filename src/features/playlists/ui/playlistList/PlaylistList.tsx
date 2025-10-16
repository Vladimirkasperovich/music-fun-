import type { FC } from 'react';
import type { Playlist } from '@/features/playlists/types/playlists.types.ts';
import { PlaylistCard } from '@/features/playlists/ui/playlistCard/PlaylistCard.tsx';
import s from './PlaylistList.module.scss';

interface Props {
    data: Playlist[];
}
export const PlaylistList: FC<Props> = ({ data }) => {
    return (
        <ul className={s.container}>
            {data.map(({ id, attributes }) => (
                <PlaylistCard key={id} attributes={attributes} />
            ))}
        </ul>
    );
};
