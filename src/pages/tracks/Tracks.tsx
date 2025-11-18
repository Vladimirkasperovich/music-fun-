import s from './Tracks.module.scss';
import { TextField } from '@/shared/ui';
import { type ChangeEvent, useState } from 'react';
import SearchIcon from '@/shared/assets/icons/searchIcon.svg';

const Tracks = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setSearchValue(event.target.value);

    return (
        <section className={s.trackContainer}>
            <h1 className={s.tracksTitle}>All Tracks</h1>
            <TextField
                size="md"
                onChange={handleChange}
                value={searchValue}
                placeholder="Search tracks"
                icon={SearchIcon}
            />
            <div></div>
        </section>
    );
};

export default Tracks;
