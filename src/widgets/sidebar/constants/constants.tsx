import Home from '@/widgets/sidebar/assets/home.svg';
import Library from '@/widgets/sidebar/assets/yourLibrary.svg';
import CreatePlaylist from '@/widgets/sidebar/assets/createPlaylist.svg';
import UploadTrack from '@/widgets/sidebar/assets/uploadTrack.svg';
import AllTracks from '@/widgets/sidebar/assets/allTracks.svg';
import AllPlaylist from '@/widgets/sidebar/assets/allPlaylist.svg';
import type { NavItem } from '@/shared/types';
import type { Route } from '@/shared/config/routes.ts';

interface SidebarItem extends NavItem {
    path?: Route;
}
export const NAV_ITEMS: SidebarItem[] = [
    { id: 1, icon: Home, title: 'Home', path: '/' },
    { id: 2, icon: Library, title: 'Your Library' },
    { id: 3, icon: CreatePlaylist, title: 'Create Playlist' },
    { id: 4, icon: UploadTrack, title: 'Upload Track' },
    { id: 5, icon: AllTracks, title: 'All Tracks', path: '/tracks' },
    { id: 6, icon: AllPlaylist, title: 'All Playlist', path: '/playlists' },
];
