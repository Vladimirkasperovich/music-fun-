import { type FC, memo } from 'react';
import type { PlaylistAttributes } from '@/features/playlists/types/playlists.types.ts';
import { PlaylistCover } from '@/features/playlists/ui/playlistCover/PlaylistCover.tsx';
import { PlaylistMeta } from '@/features/playlists/ui/playlistMeta/PlaylistMeta.tsx';
import { PlaylistReaction } from '@/features/playlists/ui/playlistReaction/PlaylistReaction.tsx';
import s from './PlaylistItem.module.scss';

interface PlaylistCardProps {
    attributes: PlaylistAttributes;
}
export const PlaylistItem: FC<PlaylistCardProps> = memo(({ attributes }) => {
    return (
        <li className={s.container} role="listitem" tabIndex={0}>
            <PlaylistCover title={attributes.title} images={attributes.images} />
            <PlaylistMeta
                title={attributes.title}
                username={attributes.user.name}
                createdAt={attributes.addedAt}
            />
            <PlaylistReaction
                likesCount={attributes.likesCount}
                dislikesCount={attributes.dislikesCount}
            />
        </li>
    );
});
