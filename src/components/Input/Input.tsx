import styles from './Input.module.scss';
import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: FC<InputProps> = ({ value, onChange, name, placeholder, label, type, ...props }) => {
    console.log(value);
    return (
        <div className={styles.wrapInput} {...props}>
            <label className={styles.label} htmlFor={name}>
                <input
                    onChange={onChange}
                    className={classNames(styles.input, {
                        [styles.filled]: value !== '',
                    })}
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                />
                <div className={styles.fakeLabel}>{label}</div>
            </label>
        </div>
    );
};

export { Input };
