import { createBrowserRouter, type RouteObject } from 'react-router';
import App from '@/app/App.tsx';
import { Routes } from '@/shared/config';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/home/ui/Home.tsx'));
const PlaylistsPage = lazy(() => import('@/pages/playlists/Playlists.tsx'));
const ProfilePage = lazy(() => import('@/pages/profile/Profile.tsx'));
const TracksPage = lazy(() => import('@/pages/tracks/Tracks.tsx'));
const UserPage = lazy(() => import('@/pages/user/User.tsx'));
const PlaylistPage = lazy(() => import('@/pages/playlist/Playlist.tsx'));

const routes: RouteObject[] = [
    {
        element: <App />,
        children: [
            { path: Routes.Home, element: <HomePage /> },
            { path: Routes.Playlists, element: <PlaylistsPage /> },
            { path: Routes.Profile, element: <ProfilePage /> },
            { path: Routes.Tracks, element: <TracksPage /> },
            { path: Routes.User, element: <UserPage /> },
            { path: Routes.Playlist, element: <PlaylistPage /> },
        ],
    },
];
export const router = createBrowserRouter(routes);
