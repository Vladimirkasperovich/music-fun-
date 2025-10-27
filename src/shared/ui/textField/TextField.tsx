import type { ChangeEvent, FC, SVGProps } from 'react';
import s from './TextField.module.scss';

interface TextFieldProps {
    label?: string;
    icon?: FC<SVGProps<SVGElement>>;
    size?: 'md' | 'lg';
    id?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string;
}

export const TextField: FC<TextFieldProps> = ({
    label,
    onChange,
    value,
    id,
    icon: Icon,
    placeholder,
    size = 'lg',
}) => {
    console.log(size);
    return (
        <label htmlFor={id} className={s.container}>
            {label}
            {Icon && <Icon className={s.icon} />}
            <input
                type="text"
                onChange={onChange}
                value={value}
                id={id}
                className={s.textField}
                placeholder={placeholder}
            />
        </label>
    );
};
