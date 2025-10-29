import type { ChangeEvent, FC, SVGProps } from 'react';
import { clsx } from 'clsx';
import s from './TextField.module.scss';

interface TextFieldProps {
    icon?: FC<SVGProps<SVGElement>>;
    size: 'md' | 'lg';
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder: string;
}

export const TextField: FC<TextFieldProps> = ({
    onChange,
    value,
    icon: Icon,
    placeholder,
    size = 'lg',
}) => {
    return (
        <label className={s.container}>
            {Icon && <Icon className={s.icon} aria-hidden="true" />}
            <input
                type="text"
                onChange={onChange}
                value={value}
                className={clsx(s.textField, s[size])}
                placeholder={placeholder}
                aria-label={placeholder}
            />
        </label>
    );
};
