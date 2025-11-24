import { type FC, memo } from 'react';
import { NewTrackCard } from '@/features/tracks/ui';
import type { Track } from '@/features/tracks/types';
import s from './NewTrackList.module.scss';
import { useNavigate } from 'react-router';

interface TrackListProps {
    tracks: Track[];
}
export const NewTrackList: FC<TrackListProps> = memo(({ tracks }) => {
    const navigate = useNavigate();
    return (
        <ul className={s.container} aria-label="new tracks" role="list">
            {tracks.map((track) => (
                <NewTrackCard
                    key={track.id}
                    title={track.attributes.title}
                    username={track.attributes.user.name}
                    images={track.attributes.images.main}
                    likesCount={track.attributes.likesCount}
                    onClick={() => navigate(`/playlists/tracks/${track.id}`)}
                />
            ))}
        </ul>
    );
});
