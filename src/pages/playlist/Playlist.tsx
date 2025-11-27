import playlistCover from '@/shared/assets/images/playlistCover.png';
import { Dislike, Like, PlayStopButton, TextField } from '@/shared/ui';
import { type ChangeEvent, useState } from 'react';
import SearchIcon from '@/shared/assets/icons/searchIcon.svg';
import More from '@/shared/assets/icons/more.svg';
import { TrackList } from '@/features/tracks/ui';
import { TRACKS_MOC } from '@/features/tracks/constants';
import { PlaylistMeta } from '@/features/playlist/ui';
import s from './Playlist.module.scss';

const hashTagItems = [
    { id: 'za12CGR', name: '#Playlists' },
    { id: 'MNzx566', name: '#Artists' },
    { id: 'PbcTR1', name: '#Albums' },
    { id: 'VFCT>/7', name: '#Podcasts & shows' },
];
const description =
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
const Playlist = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
    return (
        <section className={s.playlist}>
            <PlaylistMeta
                description={description}
                title="Chill Mix"
                cover={playlistCover}
                hashTags={hashTagItems}
            />
            <div className={s.content}>
                <div className={s.search}>
                    <TextField
                        size="md"
                        onChange={handleChange}
                        value={searchValue}
                        placeholder="Search playlist"
                        icon={SearchIcon}
                    />
                    <PlayStopButton className={s.playButton} />
                    <Like width={40} height={40} />
                    <Dislike width={40} height={40} />
                    <button className={s.moreButton}>
                        <More className={s.moreIcon} />
                    </button>
                </div>
                <TrackList tracks={TRACKS_MOC.data} />
            </div>
        </section>
    );
};

export default Playlist;
