import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '@/app/router/router.tsx';
import '@/app/styles/index.scss';

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
