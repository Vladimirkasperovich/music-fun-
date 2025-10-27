import { PlaylistList } from '@/features/playlists/ui';
import { PLAYLIST_MOC } from '@/features/playlists/constants';
import { type ChangeEvent, useState } from 'react';
import { TextField } from '@/shared/ui';
import SearchIcon from '@/features/playlists/assets/searchIcon.svg';
import s from './Playlists.module.scss';

const Playlists = () => {
    const [searchValue, setSearchValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    return (
        <section className={s.container}>
            <h1 className={s.allPlaylists}>All Playlists</h1>
            <div className={s.searchContainer}>
                {/*<input type="search" className={s.search} placeholder="Search playlist" />*/}
                <TextField
                    onChange={onChange}
                    value={searchValue}
                    placeholder="Search playlist"
                    icon={SearchIcon}
                />
                <span>Sort By Newest first</span>
            </div>
            <section>
                <PlaylistList data={PLAYLIST_MOC.data} />
            </section>
        </section>
    );
};

export default Playlists;
