import { Outlet } from 'react-router';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { ModalProvider } from '@/app/providers/modal';
import s from './App.module.scss';

function App() {
    return (
        <div className={s.container}>
            <aside>
                <Sidebar />
            </aside>
            <div>
                <ModalProvider>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                </ModalProvider>
            </div>
        </div>
    );
}

export default App;
