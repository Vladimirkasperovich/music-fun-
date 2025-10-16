import type { FC } from 'react';
import { Dislike, Like } from '@/shared/ui';
import s from './PlaylistReaction.module.scss';

interface Props {
    likesCount: number;
    dislikesCount: number;
}
export const PlaylistReaction: FC<Props> = ({ likesCount, dislikesCount }) => {
    return (
        <div className={s.likesContainer}>
            <div className={s.likes}>
                <Like width={28} height={28} />
                <span className={s.likeCount}>{likesCount}</span>
            </div>
            <div className={s.dislikes}>
                <Dislike width={28} height={28} />
                <span className={s.dislikeCount}>{dislikesCount}</span>
            </div>
        </div>
    );
};
