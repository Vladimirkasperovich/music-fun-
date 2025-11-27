import UserPhoto from '@/shared/assets/images/userPhotoLarge.png';
import { ProfileCard } from '@/features/profile/ui';
import s from './Profile.module.scss';

const Profile = () => {
    return (
        <section className={s.profilePage}>
            <ProfileCard
                userImage={UserPhoto}
                username="Dima Kuzyberdin"
                playlistsCount={58}
                tracksCount={1158}
            />
        </section>
    );
};

export default Profile;
