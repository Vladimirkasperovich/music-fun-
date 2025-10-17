import { PlaylistList } from '@/features/playlists/ui';
import { PLAYLIST_MOC } from '@/features/playlists/constants';
import { HASHTAGS } from '@/pages/home/constants/constants.ts';
import { TrackList } from '@/features/tracks/ui';
import { TRACKS_MOC } from '@/features/tracks/constants';
import s from './Home.module.scss';

const Home = () => {
    return (
        <section className={s.container}>
            <ul className={s.list}>
                {HASHTAGS.map(({ id, title }) => (
                    <li key={id} className={s.item}>
                        {title}
                    </li>
                ))}
            </ul>
            <div className={s.playlistsContainer}>
                <h1 className={s.playlistsTitle}>New playlists</h1>
                <PlaylistList data={PLAYLIST_MOC.data} />
            </div>
            <div className={s.tracksContainer}>
                <h1 className={s.tracksTitle}>New Tracks</h1>
                <TrackList tracks={TRACKS_MOC.data} />
            </div>
        </section>
    );
};

export default Home;
