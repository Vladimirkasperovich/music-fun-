import { type FC, type PropsWithChildren, useState } from 'react';
import { ModalContext, type ModalName } from '@/app/providers/modal';

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
    const [modal, setModal] = useState<ModalName>(null);
    const openModal = (name: ModalName) => setModal(name);
    const closeModal = () => setModal(null);

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};
