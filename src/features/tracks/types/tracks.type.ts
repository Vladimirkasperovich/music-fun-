export interface TrackResponse {
    data: Track[];
    meta: TrackMeta;
    included?: TrackIncludedArtist[];
}

export interface Track {
    id: string;
    type: 'tracks';
    attributes: TrackAttributes;
    relationships?: TrackRelationships;
}

export interface TrackAttributes {
    title: string;
    addedAt: string;
    likesCount: number;
    attachments: TrackAttachment[];
    images: TrackImages;
    user: TrackUser;
    currentUserReaction: number;
    isPublished: boolean;
    publishedAt: string;
}

export interface TrackAttachment {
    id: string;
    addedAt: string;
    updatedAt: string;
    version: number;
    url: string;
    contentType: string;
    originalName: string;
    fileSize: number;
}

export interface TrackImages {
    main: TrackImageMain[];
}

export interface TrackImageMain {
    type: 'original' | 'medium' | 'thumbnail';
    width: number;
    height: number;
    fileSize: number;
    url: string;
}

export interface TrackUser {
    id: string;
    name: string;
}

export interface TrackRelationships {
    artists?: {
        data: TrackArtistReference[];
    };
}

interface TrackArtistReference {
    id: string;
    type: string;
}

export interface TrackIncludedArtist {
    id: string;
    type: string;
    attributes: {
        name: string;
    };
}

interface TrackMeta {
    page: number;
    pageSize: number;
    totalCount: number;
    pagesCount: number;
    nextCursor: string | null;
}
