//TODO: need to make user and profile page are protected
export const Routes = {
    Home: '/',
    Playlists: '/playlists',
    Playlist: 'playlist/:playlistId',
    Profile: '/profile',
    Tracks: '/tracks',
    User: '/user',
    Temporary: '#',
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];
