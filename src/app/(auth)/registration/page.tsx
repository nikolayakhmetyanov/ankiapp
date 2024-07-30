'use client';

import { useState } from 'react';
import { sendSignInLinkToEmail, signInWithPopup } from 'firebase/auth';
import { actionCodeSettings, auth, googleProvider } from '@/services/firebase/config';
import { GoogleIcon } from '@/components/Icon/GoogleIcon';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { Spinner } from '@nextui-org/spinner';

const RegistrationPage = () => {
    const [email, setEmail] = useState();

    const mutationRegistration = useMutation({
        mutationFn: async ({ email }) => {
            if (!email) throw new Error('Email is required');

            const responseFetchRegistration = await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem('emailForSignIn', email);
            return responseFetchRegistration;
        },
        onSuccess: () => {
            console.log('Registration link sent successfully');
        },
        onError: (error) => {
            console.error('Error sending registration link:', error);
        },
    });

    const mutationGoogleSignIn = useMutation({
        mutationFn: async () => {
            const result = await signInWithPopup(auth, googleProvider);
            // Дополнительно можно обработать результат, например, сохранить токен и т.д.
            console.log(result);
            return result;
        },
        onError: (error) => {
            console.error('Error signing in with Google:', error);
        },
        onSuccess: (result) => {
            console.log('Signed in with Google:', result);

        },
    });

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        mutationRegistration.mutate({ email: email });
    };

    const handleGoogleSignIn = async (event) => {
        event.preventDefault();
        mutationGoogleSignIn.mutate();
    };

    return (
        <div className="flex justify-center">
            <form
                className="p-6 rounded-2xl border-1 border-gray-700 max-w-96"
                onSubmit={handleSubmitForm}
                autoComplete="off"
            >
                <h1 className="text-2xl text-center">Создать аккаунт</h1>
                {mutationRegistration.status === 'idle' ? (
                    <>
                        <p>Зарегистрируйтесь в системе, чтобы получить полный доступ к приложению.</p>
                        <div>
                            <Input type="email" label="Email" onValueChange={setEmail} value={email} />
                            <Button color="primary" size="lg" type="submit">
                                Продолжить
                            </Button>
                        </div>
                        <p>
                            Уже есть учетная запись? <Link href="/login">Войти</Link>
                        </p>
                        <div>
                            <span>Или</span>
                        </div>
                        <Button onClick={handleGoogleSignIn}>
                            <a href="/#">
                                <GoogleIcon />
                                <span>Продолжить с Google</span>
                            </a>
                        </Button>
                    </>
                ) : null}
                {mutationRegistration.isPending ? (
                    <>
                        <p>Ожидайте. Проверяем Ваш email.</p>
                        <Spinner />
                    </>
                ) : null}
                {mutationRegistration.isSuccess ? (
                    <p>Мы отправили на указанный email письмо для завершения регистрации.</p>
                ) : null}
                {mutationRegistration.isError ? (
                    <>
                        <p>Упс, что-то пошло не так.</p>
                        <div>
                            <Button
                                color="primary"
                                size="lg"
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
        </div>
    );
};

export default RegistrationPage;
