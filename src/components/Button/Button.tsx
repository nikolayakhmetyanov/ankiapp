import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ type, className, children, ...props }) => {
    return (
        <button
            className={classNames(styles.button, className, {
                [styles.ghost]: type === 'ghost',
            })}
            {...props}
        >
            {children}
        </button>
    );
};

export { Button };
