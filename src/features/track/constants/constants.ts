import type { PlaylistWithTrack } from '@/features/track/types';
import PlaylistCover1 from '@/shared/assets/images/playlistCover1.png';
import PlaylistCover2 from '@/shared/assets/images/playlistCover2.png';
import PlaylistCover3 from '@/shared/assets/images/playlistCover3.png';
import PlaylistCover4 from '@/shared/assets/images/playlistCover4.png';

export const PLAYLISTS_WITH_TRACK: PlaylistWithTrack[] = [
    { id: '1', title: 'Ocean Front Apt.', owner: 'Kasper', tracksCount: 27, image: PlaylistCover1 },
    { id: '2', title: 'Ocean Front Apt.', owner: 'Kasper', tracksCount: 27, image: PlaylistCover2 },
    { id: '3', title: 'Ocean Front Apt.', owner: 'Kasper', tracksCount: 27, image: PlaylistCover3 },
    { id: '4', title: 'Ocean Front Apt.', owner: 'Kasper', tracksCount: 27, image: PlaylistCover4 },
];
