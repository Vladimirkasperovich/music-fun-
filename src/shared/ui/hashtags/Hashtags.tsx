import { useState } from 'react';
import HashtagsOpen from '@/shared/assets/icons/hashtagsOpen.svg';
import HashtagsClose from '@/shared/assets/icons/hashtagsClose.svg';
import s from './Hashtags.module.scss';

// interface HashtagsResponse {
//     id: string;
//     name: string;
// }

export const Hashtags = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [hashtags, setHashtags] = useState<HashtagsResponse[]>([]);
    return (
        <section className={s.container}>
            <div className={s.header}>
                <input type="text" className={s.input} />
                <button onClick={() => setIsOpen((prevState) => !prevState)} className={s.button}>
                    {isOpen ? (
                        <HashtagsClose className={s.icon} />
                    ) : (
                        <HashtagsOpen className={s.icon} />
                    )}
                </button>
            </div>
        </section>
    );
};
