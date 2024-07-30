'use client';

import { auth } from '@/services/firebase/config';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import styles from './LoginForm.module.scss';

const LoginForm = ({ ...props }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage);
            });
    };

    return (
        <form className={styles.loginForm} onSubmit={handlerSubmit} {...props}>
            <div className={styles.title}>Войти</div>
            <p>Зарегистрируйтесь в системе OpenAI, чтобы перейти к OpenAI ChatGPT Web.</p>
            <Input name="demo" placeholder="Введите email" label="Email" />
            <Input name="demo" placeholder="Введите пароль" label="Пароль" />
            <Button>Войти</Button>
            <p className={styles.text}>Уже есть учетная запись? <a href="/login">Войти</a></p>
            <div>sadasdas</div>
        </form>
    );
};

export { LoginForm };
