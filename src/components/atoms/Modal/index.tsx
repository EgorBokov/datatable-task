import { PropsWithChildren } from 'react'
import { CloseIcon } from '@components/atoms/icons/CloseIcon'

import styles from './Modal.module.scss';

type IModalProps = {
    closeHandler?: () => void;
    isOpen: boolean;
    withoutClose?: boolean;
} & PropsWithChildren

export const Modal = ({ isOpen, closeHandler, children, withoutClose }: IModalProps) => {
    if (!isOpen) {
        return null
    }
    return (
        <div className={styles.wrapper}>
            {!withoutClose && (
                <CloseIcon
                    onClick={closeHandler}
                    className={styles.closeIcon}
                    width={20}
                    height={20}
                />
            )}
            { children }
        </div>
    )
}