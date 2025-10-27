import { PlaylistList } from '@/features/playlists/ui';
import { PLAYLIST_MOC } from '@/features/playlists/constants';
import { HASHTAGS } from '@/pages/home/constants/constants.ts';
import { TrackList } from '@/features/tracks/ui';
import { TRACKS_MOC } from '@/features/tracks/constants';
import { ModalWrapper } from '@/shared/ui';
import { useContext } from 'react';
import { ModalContext } from '@/app/providers/modal';
import { AuthModal } from '@/features/auth/ui';
import s from './Home.module.scss';

const Home = () => {
    const { modal, closeModal } = useContext(ModalContext);
    const isOpenAuthModal = modal === 'auth';

    return (
        <section className={s.container}>
            <ul className={s.list}>
                {HASHTAGS.map(({ id, title }) => (
                    <li key={id} className={s.item}>
                        {title}
                    </li>
                ))}
            </ul>

            <ModalWrapper isOpen={isOpenAuthModal} onClose={closeModal} aria-label="auth window">
                <AuthModal />
            </ModalWrapper>

            <section className={s.playlistsContainer} aria-labelledby="playlists-title">
                <h1 id="playlists-title" className={s.playlistsTitle}>
                    New playlists
                </h1>
                <PlaylistList data={PLAYLIST_MOC.data} />
            </section>
            <section className={s.tracksContainer} aria-labelledby="tracks-title">
                <h1 id="tracks-title" className={s.tracksTitle}>
                    New Tracks
                </h1>
                <TrackList tracks={TRACKS_MOC.data} />
            </section>
        </section>
    );
};

export default Home;
