import { type FC, type MouseEvent, type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Close from './assets/Close.svg';
import s from './ModalWrapper.module.scss';

interface ModalWrapperProps {
    children: ReactNode;
    isOpen: boolean;
    modalName?: string;
    onClose: () => void;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({ children, isOpen, modalName, onClose }) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    const dialogClickHandler = (event: MouseEvent<HTMLDialogElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <dialog className={s.dialog} ref={dialogRef} onClick={dialogClickHandler}>
            <div
                className={s.modalBody}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className={s.modalHeader}>
                    <p className={s.title}>{modalName}</p>
                    <button aria-label="сlose modal window" onClick={() => onClose()}>
                        <Close className={s.icon} />
                    </button>
                </div>
                {children}
            </div>
        </dialog>,
        document.body,
    );
};
