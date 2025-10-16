import type { FC } from 'react';
import type { PlaylistImages } from '@/features/playlists/types/playlists.types.ts';
import defaultCover from '@/features/playlists/assets/default-playlist-cover.png';
import s from './PlaylistCover.module.scss';

interface Props {
    title: string;
    images: PlaylistImages;
}
export const PlaylistCover: FC<Props> = ({ title, images }) => {
    const image = images.main.find((item) => item.type === 'original');
    const src = image ? image.url : defaultCover;
    return <img src={src} alt={`${title} playlist cover `} className={s.cover} />;
};
