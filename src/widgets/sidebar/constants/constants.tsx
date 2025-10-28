import Home from '@/widgets/sidebar/assets/home.svg';
import Library from '@/widgets/sidebar/assets/yourLibrary.svg';
import CreatePlaylist from '@/widgets/sidebar/assets/createPlaylist.svg';
import UploadTrack from '@/widgets/sidebar/assets/uploadTrack.svg';
import AllTracks from '@/widgets/sidebar/assets/allTracks.svg';
import AllPlaylist from '@/widgets/sidebar/assets/allPlaylist.svg';
import type { NavItem } from '@/shared/types';
import { Routes } from '@/shared/config';

export const NAV_ITEMS: NavItem[] = [
    { id: 1, icon: Home, title: 'Home', path: Routes.Home },
    { id: 2, icon: Library, title: 'Your Library', path: Routes.Temporary },
    { id: 3, icon: CreatePlaylist, title: 'Create Playlist', path: Routes.Temporary },
    { id: 4, icon: UploadTrack, title: 'Upload Track', path: Routes.Temporary },
    { id: 5, icon: AllTracks, title: 'All Tracks', path: Routes.Tracks },
    { id: 6, icon: AllPlaylist, title: 'All Playlist', path: Routes.Playlists },
];
