import type { Track } from '@/features/tracks/types';
import Clock from '@/shared/assets/icons/clock.svg';
import { TrackItem } from '@/features/tracks/ui';
import type { FC } from 'react';
import s from './TrackList.module.scss';

interface TrackListProps {
    tracks: Track[];
}

export const TrackList: FC<TrackListProps> = ({ tracks }) => {
    return (
        <section aria-label="Track list">
            <div className={s.header} role="rowheader">
                <div className={s.headerLeft}>
                    <span className={s.headerRank}>#</span>
                    <span className={s.headerTitle}>TITLE</span>
                </div>

                <div className={s.headerRight}>
                    <span className={s.headerDate}>DATE ADDED</span>
                    <Clock />
                </div>
            </div>

            <ul className={s.list} role="list">
                {tracks.map(({ id, attributes }, index) => (
                    <TrackItem
                        key={id}
                        rank={index + 1}
                        title={attributes.title}
                        username={attributes.user.name}
                    />
                ))}
            </ul>
        </section>
    );
};
