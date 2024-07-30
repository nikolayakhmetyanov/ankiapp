'use client';

import { useReducer } from 'react';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { GoogleIcon } from '@/components/Icon/GoogleIcon';
import styles from './RegistrationForm.module.scss';
import { Loader } from '@/components/Loader/Loader';

const initialState = {
    email: '',
    message: '',
    status: 'idle',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload.email,
            };
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.payload.message,
            };
        case 'SET_STATUS':
            return {
                ...state,
                status: action.payload.status,
            };
        default:
            return state;
    }
};

const RegistrationForm = ({ ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch({
                type: 'SET_STATUS',
                payload: {
                    status: 'fetch',
                },
            });
            const response = await fetch('/api/auth/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: state.email }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Something went wrong');
            }

            dispatch({
                type: 'SET_STATUS',
                payload: {
                    status: 'success',
                },
            });
        } catch (error) {
            dispatch({
                type: 'SET_STATUS',
                payload: {
                    status: 'error',
                },
            });
            dispatch({
                type: 'SET_ERROR',
                payload: {
                    message: error.message,
                },
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.registrationForm} {...props} autoComplete="off">
            <div className={styles.title}>Создать аккаунт</div>
            {state.status === 'idle' ? (
                <>
                    <p className={styles.subTitle}>
                        Зарегистрируйтесь в системе, чтобы получить полный доступ к приложению.
                    </p>
                    <div className={styles.wrapFormItems}>
                        <Input
                            onChange={(event) =>
                                dispatch({
                                    type: 'SET_EMAIL',
                                    payload: { email: event.target.value },
                                })
                            }
                            name="email"
                            placeholder="Введите email"
                            label="Email"
                            type="email"
                            value={state.email}
                        />
                        <Button type="submit">Продолжить</Button>
                    </div>
                    <p className={styles.footerText}>
                        Уже есть учетная запись? <a href="/login">Войти</a>
                    </p>
                    <div className={styles.authServicesSeparator}>
                        <span>Или</span>
                    </div>
                    <div className={styles.serviceLinksWrap}>
                        <a className={styles.serviceLinkItem} href="/#">
                            <GoogleIcon />
                            <span>Продолжить с Google</span>
                        </a>
                    </div>
                </>
            ) : null}
            {state.status === 'fetch' ? (
                <>
                    <p className={styles.subTitle}>
                         Ожидайте. Проверяем Ваш email.
                    </p>
                    <Loader />
                </>
            ) : null}
            {state.status === 'success' ? (
                <p className={styles.subTitle}>Мы отправили на указанный email письмо для завершения регистрации.</p>
            ) : null}
            {state.status === 'error' ? (
                <>
                    <p className={styles.subTitle}>Упс, что-то пошло не так.</p>
                    <div className={styles.wrapFormItems}>
                        <Button
                            onClick={() => {
                                window.location.reload();
                            }}
                            type="submit"
                        >
                            Попробовать снова
                        </Button>
                    </div>
                </>
            ) : null}
        </form>
    );
};

export { RegistrationForm };
