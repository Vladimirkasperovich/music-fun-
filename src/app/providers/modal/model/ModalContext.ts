import { createContext } from 'react';

export type ModalName =
    | 'auth'
    | 'editProfile'
    | 'choosePlaylist'
    | 'createPlaylist'
    | 'editPlaylist'
    | 'uploadTrack'
    | 'editTrack'
    | null;

interface ModalContextProps {
    modal: ModalName;
    openModal: (id: ModalName) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
    modal: null,
    closeModal: () => {},
    openModal: () => {},
});
