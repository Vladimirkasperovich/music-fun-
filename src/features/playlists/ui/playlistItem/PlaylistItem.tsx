import { type FC, memo } from 'react';
import type { PlaylistAttributes } from '@/features/playlists/types/playlists.types.ts';
import { PlaylistCover } from '@/features/playlists/ui/playlistCover/PlaylistCover.tsx';
import { PlaylistInfo } from '@/features/playlists/ui/playlistInfo/PlaylistInfo.tsx';
import { PlaylistReaction } from '@/features/playlists/ui/playlistReaction/PlaylistReaction.tsx';
import s from './PlaylistItem.module.scss';

interface PlaylistCardProps {
    attributes: PlaylistAttributes;
    onClick: () => void;
}
export const PlaylistItem: FC<PlaylistCardProps> = memo(({ attributes, onClick }) => {
    return (
        <li className={s.container} role="listitem" tabIndex={0} onClick={onClick}>
            <PlaylistCover title={attributes.title} images={attributes.images} />
            <PlaylistInfo
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
