import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'ghost' | 'primary';
}

const Button: FC<ButtonProps> = ({ children, className, variant, ...props }) => {
    return (
        <button
            className={classNames(styles.button, className, {
                [styles.ghost]: variant === 'ghost',
            })}
            {...props}
        >
            {children}
        </button>
    );
};

export { Button };
