import type { FC, ReactNode } from 'react';

interface ModalWrapperProps {
    children: ReactNode;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({ children }) => {
    return <dialog>{children}</dialog>;
};
