import { ContainerLayout } from '@components/layouts/ContainerLayout'
import { EditableModal } from '@components/molecules/EditableModal'
import { useState } from 'react';
import { Button } from '@components/atoms/Button';

export const ProductsPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeHandler = () => setIsOpen(false);

    const handleChangeIsOpenState = () => setIsOpen(prev => !prev);
    return (
        <ContainerLayout>
            <Button onClick={handleChangeIsOpenState}>Change state</Button>
            <EditableModal onClose={closeHandler} isOpen={isOpen} label="Name" />
        </ContainerLayout>
    )
}