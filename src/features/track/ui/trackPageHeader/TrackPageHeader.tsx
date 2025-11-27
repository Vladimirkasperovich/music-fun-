import TrackCover from '@/shared/assets/images/trackCover.png';
import { Hashtags } from '@/shared/ui/hashtags/Hashtags.tsx';
import type { NamedEntity } from '@/shared/types';
import s from './TrackPageHeader.module.scss';

const HASHTAGS: NamedEntity[] = [
    { id: 'zxcwasd19U', name: 'Playlists' },
    { id: '123mmans', name: 'Artists' },
    { id: 'Casdw2', name: 'Albums' },
    { id: 'MTypa0', name: 'Podcasts & shows' },
];
export const TrackPageHeader = () => {
    return (
        <div className={s.trackPageHeader}>
            <div className={s.trackPageCover}>
                <img src={TrackCover} alt="track cover" className={s.trackPageCoverImage} />
            </div>

            <div className={s.trackPageMeta}>
                <Hashtags hashtags={HASHTAGS} />
                <h1 className={s.trackPageTitle}>1 (Remastered)</h1>
                <span className={s.trackPageArtist}>The Beatles</span>
                <span className={s.trackPageReleaseDate}>Release date 22/02/2024</span>
            </div>
        </div>
    );
};
