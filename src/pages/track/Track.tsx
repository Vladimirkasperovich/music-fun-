import { type ChangeEvent, useState } from 'react';
import TrackCover from '@/shared/assets/images/trackCover.png';
import type { NamedEntity } from '@/shared/types';
import { Hashtags } from '@/shared/ui/hashtags/Hashtags.tsx';
import Play from '@/shared/assets/icons/play.svg';
import More from '@/shared/assets/icons/more.svg';
import { Dislike, Like, TextField } from '@/shared/ui';
import Search from '@/shared/assets/icons/searchIcon.svg';
import s from './Track.module.scss';

const HASHTAGS: NamedEntity[] = [
    { id: 'zxcwasd19U', name: 'Playlists' },
    { id: '123mmans', name: 'Artists' },
    { id: 'Casdw2', name: 'Albums' },
    { id: 'MTypa0', name: 'Podcasts & shows' },
];
const Track = () => {
    const [searchValue, setSeachValue] = useState('');
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSeachValue(e.target.value);
    return (
        <section className={s.track}>
            <div className={s.wrapper}>
                <div className={s.cover}>
                    <img src={TrackCover} alt="track cover" className={s.image} />
                </div>
                <div className={s.meta}>
                    <Hashtags hashtags={HASHTAGS} />
                    <h1 className={s.trackTitle}>1(Remastered)</h1>
                    <span className={s.owner}>The Beatles</span>
                    <span className={s.release}>Release date 22/02/2024</span>
                </div>
            </div>
            <div className={s.reaction}>
                <Play className={s.play} />
                <Like width={40} height={40} />
                <Dislike width={40} height={40} />
                <More className={s.more} />
            </div>
            <div className={s.search}>
                <h2 className={s.label}>In which playlist is the track?</h2>
                <TextField
                    size="md"
                    onChange={handleSearchChange}
                    value={searchValue}
                    placeholder="Search playlist"
                    icon={Search}
                />
            </div>
            <ul></ul>
        </section>
    );
};

export default Track;
