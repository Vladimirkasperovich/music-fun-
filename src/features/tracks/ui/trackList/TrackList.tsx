import { type FC, memo } from 'react';
import { TrackCard } from '@/features/tracks/ui';
import type { Track } from '@/features/tracks/types';
import s from './TrackList.module.scss';

interface TrackListProps {
    tracks: Track[];
}
export const TrackList: FC<TrackListProps> = memo(({ tracks }) => {
    return (
        <ul className={s.container} aria-label="new tracks" role="list">
            {tracks.map((track) => (
                <TrackCard
                    key={track.id}
                    title={track.attributes.title}
                    username={track.attributes.user.name}
                    images={track.attributes.images.main}
                    likesCount={track.attributes.likesCount}
                />
            ))}
        </ul>
    );
});
