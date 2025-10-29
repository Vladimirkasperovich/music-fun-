export interface PlaylistResponse {
    data: Playlist[];
    meta: Meta;
}

export interface Playlist {
    id: string;
    type: 'playlists';
    attributes: PlaylistAttributes;
}

export interface PlaylistAttributes {
    title: string;
    description: string;
    addedAt: string;
    updatedAt: string;
    order: number;
    user: PlaylistUser;
    images: PlaylistImages;
    tags: Tag[];
    currentUserReaction: number;
    likesCount: number;
    dislikesCount: number;
}

export interface PlaylistUser {
    id: string;
    name: string;
}

export interface PlaylistImages {
    main: PlaylistListMain[];
}

export interface PlaylistListMain {
    type: 'original' | 'medium' | 'thumbnail';
    width: number;
    height: number;
    fileSize: number;
    url: string;
}
interface Tag {
    id: string;
    name: string;
}

interface Meta {
    totalCount: number;
    page: number;
    pageSize: number;
    pagesCount: number;
}

export interface SelectItem {
    id: number;
    title: string;
    value: string;
}
