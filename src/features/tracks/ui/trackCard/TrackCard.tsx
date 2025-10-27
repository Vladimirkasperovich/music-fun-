import { type FC, memo } from 'react';
import type { TrackImageMain } from '@/features/tracks/types';
import defaultCover from '@/shared/assets/images/default-cover.png';
import { Dislike, Like } from '@/shared/ui';
import s from './TrackCard.module.scss';

interface TrackCardProps {
    title: string;
    username: string;
    images: TrackImageMain[];
    likesCount: number;
}
export const TrackCard: FC<TrackCardProps> = memo(({ username, images, title, likesCount }) => {
    const image = images.find((image) => image.type === 'original');
    const src = image ? image.url : defaultCover;

    return (
        <li className={s.container} role="listitem" tabIndex={0}>
            <img src={src} alt={`${title} track image`} loading="lazy" className={s.image} />
            <h2 className={s.title}>{title}</h2>
            <h3 className={s.username}>{username}</h3>
            <section className={s.userReaction}>
                <div className={s.likeContainer}>
                    <Like width={28} height={28} />
                    <span className={s.likesCount} aria-label="likes count">
                        {likesCount}
                    </span>
                </div>
                <Dislike width={28} height={28} />
            </section>
        </li>
    );
});
