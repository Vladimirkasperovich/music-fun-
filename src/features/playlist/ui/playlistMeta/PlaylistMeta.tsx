import s from './PlaylistMeta.module.scss';
import type { NamedEntity } from '@/shared/types';
import type { FC } from 'react';

interface PlaylistMetaProps {
    hashTags: NamedEntity[];
    cover: string;
    title: string;
    description: string;
}
export const PlaylistMeta: FC<PlaylistMetaProps> = ({ description, title, cover, hashTags }) => {
    return (
        <div className={s.playlistInfo}>
            <div className={s.cover}>
                <img src={cover} alt="playlist cover" className={s.image} />
            </div>
            <div className={s.playlistMeta}>
                <ul className={s.list}>
                    {hashTags.map(({ id, name }) => (
                        <li key={id} className={s.item}>
                            {name}
                        </li>
                    ))}
                </ul>
                <h1 className={s.playlistTitle}>{title}</h1>
                <p className={s.playlistDescription}>{description}</p>
                <span className={s.participants}>
                    Julia Wolf, ayokay, Khalid <span className={s.more}>and more</span>
                </span>
                <span className={s.author}>
                    <span className={s.madeFor}>Made for</span> Dima Kuzyberdin
                    <span className={s.tracksCount}>34 Tracks, 2hr 01 min</span>
                </span>
            </div>
        </div>
    );
};
