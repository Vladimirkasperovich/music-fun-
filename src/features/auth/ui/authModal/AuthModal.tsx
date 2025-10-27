import s from './AuthModal.module.scss';

export const AuthModal = () => {
    return (
        <section className={s.container}>
            <h1 className={s.title}>Millions of Tracks. Free on Musifun.</h1>
            <button className={s.continue}>Continue without Sign In</button>
            <button className={s.signup}>Sign up with APIHUB</button>
        </section>
    );
};
