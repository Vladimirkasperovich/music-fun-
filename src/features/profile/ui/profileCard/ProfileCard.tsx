import type { FC } from 'react';
import Edit from '@/features/profile/assets/editOutlined.svg';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    userImage: string;
    username: string;
    playlistsCount: number;
    tracksCount: number;
}
export const ProfileCard: FC<ProfileCardProps> = ({
    playlistsCount,
    tracksCount,
    userImage,
    username,
}) => {
    return (
        <div className={s.profileCard}>
            <div className={s.profileAvatarWrapper}>
                <img className={s.profileAvatar} src={userImage} alt="user photo" loading="lazy" />
            </div>

            <div className={s.profileInfo}>
                <h1 className={s.profileName}>{username}</h1>
                <button className={s.profileEditButton}>
                    <Edit className={s.editIcon} />
                    Edit profile
                </button>
            </div>

            <div className={s.profileStats}>
                <div className={s.profileStatItem}>
                    <span className={s.profileStatValue}>{playlistsCount}</span>
                    <span className={s.profileStatLabel}>PLAYLISTS</span>
                </div>

                <div className={s.profileStatItem}>
                    <span className={s.profileStatValue}>{tracksCount}</span>
                    <span className={s.profileStatLabel}>TRACKS</span>
                </div>
            </div>
        </div>
    );
};
