import { SearchSelect, TextField } from '@/shared/ui';
import { type ChangeEvent, useState } from 'react';
import SearchIcon from '@/shared/assets/icons/searchIcon.svg';
import type { NamedEntity } from '@/shared/types';
import { TrackList } from '@/features/tracks/ui';
import { TRACKS_MOC } from '@/features/tracks/constants';
import s from './Tracks.module.scss';

const HASHTAGS: NamedEntity[] = [
    { id: 'adasxzc', name: 'tags1' },
    { id: '123xcca', name: 'tags2' },
    { id: '34asdasdas1', name: 'tags3' },
    { id: '[;abnnaa', name: 'tags4' },
    { id: '.aau@37343', name: 'tags5' },
    { id: 'z.,mn237', name: 'tags6' },
    { id: 'kjhReaYKa', name: 'tags7' },
    { id: 'aKKAmNBGT6', name: 'tags8' },
];
const Tracks = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setSearchValue(event.target.value);

    return (
        <section className={s.container}>
            <h1 className={s.tracksTitle}>All Tracks</h1>
            <TextField
                size="md"
                onChange={handleChange}
                value={searchValue}
                placeholder="Search tracks"
                icon={SearchIcon}
            />
            <div className={s.hashtagContainer}>
                <div className={s.hashtag}>
                    <SearchSelect items={HASHTAGS} label="Hashatags" />
                </div>
                <div className={s.artist}>
                    <SearchSelect items={HASHTAGS} label="Artist" />
                </div>
            </div>
            <TrackList tracks={TRACKS_MOC.data} />
        </section>
    );
};

export default Tracks;
