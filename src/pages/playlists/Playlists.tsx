import { PlaylistList, PlaylistSelect } from '@/features/playlists/ui';
import { PLAYLIST_MOC, SELECT_ITEMS } from '@/features/playlists/constants';
import { type ChangeEvent, useState } from 'react';
import { SearchSelect, TextField } from '@/shared/ui';
import SearchIcon from '@/shared/assets/icons/searchIcon.svg';
import { SEARCH_DATA } from '@/shared/ui/searchSelect/constants/constants.ts';
import type { SelectItem } from '@/features/playlists/types';
import s from './Playlists.module.scss';

const Playlists = () => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedItem, setSelectedItem] = useState<SelectItem>(SELECT_ITEMS[0]);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value);
    const onSelect = (value: SelectItem) => setSelectedItem(value);

    return (
        <section className={s.container}>
            <h1 className={s.allPlaylists}>All Playlists</h1>
            <div className={s.searchContainer}>
                <TextField
                    onChange={onChange}
                    value={searchValue}
                    placeholder="Search playlist"
                    icon={SearchIcon}
                    size="md"
                />
                <PlaylistSelect onSelect={onSelect} value={selectedItem} options={SELECT_ITEMS} />
            </div>
            <SearchSelect items={SEARCH_DATA} label="Hashtags" />
            <PlaylistList data={PLAYLIST_MOC.data} />
        </section>
    );
};

export default Playlists;
