import { type FC, memo } from 'react';
import type { PlaylistImages } from '@/features/playlists/types/playlists.types.ts';
import defaultCover from '@/shared/assets/images/default-cover.png';
import s from './PlaylistCover.module.scss';

interface PlaylistCoverProps {
    title: string;
    images: PlaylistImages;
}
export const PlaylistCover: FC<PlaylistCoverProps> = memo(({ title, images }) => {
    const image = images.main.find((item) => item.type === 'original');
    const src = image ? image.url : defaultCover;
    return <img src={src} alt={`${title} playlist cover `} className={s.cover} />;
});
