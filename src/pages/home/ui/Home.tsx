import { PlaylistList } from '@/features/playlists/ui';
import { PLAYLIST_MOC } from '@/features/playlists/constants/constants.ts';
import { HASHTAGS } from '@/pages/home/constants/constants.ts';
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
        </section>
    );
};

export default Home;
