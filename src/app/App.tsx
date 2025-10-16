import { Outlet } from 'react-router';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import s from './App.module.scss';

function App() {
    return (
        <div className={s.container}>
            <aside>
                <Sidebar />
            </aside>
            <div className={s.content}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default App;
