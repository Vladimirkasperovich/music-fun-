import type { FC } from 'react';
import { Dislike, Like } from '@/shared/ui';
import More from '@/shared/assets/icons/more.svg';
import TrackImage from '@/features/tracks/assets/trackImage.png';
import s from './TrackItem.module.scss';

interface TrackItemProps {
    rank: number;
    title: string;
    username: string;
}

export const TrackItem: FC<TrackItemProps> = ({ username, title, rank }) => {
    return (
        <li className={s.track}>
            <div className={s.main}>
                <span className={s.rank}>{rank}</span>
                <img src={TrackImage} alt={`${title} cover`} className={s.cover} loading="lazy" />

                <div className={s.info}>
                    <span className={s.title}>{title}</span>
                    <span className={s.artist}>{username}</span>
                </div>
            </div>

            <div className={s.meta}>
                <span className={s.date}>1 day ago</span>

                <div className={s.controls}>
                    <Like width={32} height={32} />
                    <Dislike width={32} height={32} />
                    <button className={s.more} aria-label="More options">
                        <More />
                    </button>
                    <span className={s.duration}>2:12</span>
                </div>
            </div>
        </li>
    );
};
