import { ChangeEvent } from 'react'
import cn from 'classnames'
import { SearchIcon } from '@components/atoms/icons/SearchIcon';
import { Input } from '@components/atoms/Input'

import styles from './Filter.module.scss'

type IFilterProps = {
    className?: string;
    onChange: (value: string) => void;
}

export const Filter = ({ onChange, className }: IFilterProps) => {
    const handleOnInput = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <div className={cn(styles.container, className)}>
            <Input
                onChange={handleOnInput}
                withIcon={<SearchIcon width={20} height={20} />}
            />
        </div>
    )
}