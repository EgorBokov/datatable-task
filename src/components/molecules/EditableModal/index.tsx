import { Modal } from '@components/atoms/Modal'
import { Button } from '@components/atoms/Button'
import { Input } from '@components/atoms/Input'
import { CloseIcon } from '@components/atoms/icons/CloseIcon'

import styles from './EditableModal.module.scss'

type IEditableModalProps = {
    isOpen: boolean;
    onClose: () => void;
    label: string;
}

export const EditableModal = ({ label, isOpen, onClose }: IEditableModalProps) => {
    return (
        <Modal withoutClose isOpen={isOpen}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3 className={styles.title}>
                        Edit
                    </h3>
                    <CloseIcon
                        className={styles.icon}
                        width={20}
                        height={20}
                        onClick={onClose}
                    />
                </div>
                <Input type="text" label={label} className={styles.input} />

                <Button className={styles.button}>Save</Button>
            </div>
        </Modal>
    )
}