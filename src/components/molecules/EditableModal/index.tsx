import { ChangeEvent } from 'react';
import { Modal } from '@components/atoms/Modal'
import { Button } from '@components/atoms/Button'
import { Input } from '@components/atoms/Input'
import { withFirstUppercaseLetter } from '@utils/common'

import { CloseIcon } from '@components/atoms/icons/CloseIcon'
import styles from './EditableModal.module.scss'

type IEditableModalProps = {
    isOpen: boolean;
    onClose: () => void;
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
    value: string;
}

export const EditableModal = ({ label, isOpen, onClose, onChange, onSave, value }: IEditableModalProps) => {
    const formattedLabel = withFirstUppercaseLetter(label)

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
                <Input
                    type="text"
                    label={formattedLabel}
                    className={styles.input}
                    onChange={onChange}
                    value={value}
                />
                <Button className={styles.button} onClick={onSave}>Save</Button>
            </div>
        </Modal>
    )
}