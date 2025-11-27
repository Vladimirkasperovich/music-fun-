import { type ChangeEvent, useState } from 'react';
import Play from '@/shared/assets/icons/play.svg';
import More from '@/shared/assets/icons/more.svg';
import { Dislike, Like, TextField } from '@/shared/ui';
import Search from '@/shared/assets/icons/searchIcon.svg';
import { PlaylistsWithTracksList, TrackPageHeader } from '@/features/track/ui';
import { PLAYLISTS_WITH_TRACK } from '@/features/track/constants';
import s from './Track.module.scss';

const Track = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

    return (
        <section className={s.trackPage}>
            <TrackPageHeader />
            <div className={s.trackPageActions}>
                <Play className={s.trackPageActionPlay} />
                <Like width={40} height={40} />
                <Dislike width={40} height={40} />
                <More className={s.trackPageActionMore} />
            </div>

            <div className={s.trackPagePlaylistSearch}>
                <h2 className={s.trackPagePlaylistSearchLabel}>In which playlist is the track?</h2>
                <TextField
                    size="md"
                    onChange={handleSearchChange}
                    value={searchValue}
                    placeholder="Search playlist"
                    icon={Search}
                />
            </div>
            <PlaylistsWithTracksList playlists={PLAYLISTS_WITH_TRACK} />
        </section>
    );
};

export default Track;
