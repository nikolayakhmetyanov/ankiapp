import { LoginForm } from '@/components/LoginForm/LoginForm';
import styles from '@/styles/app/auth/registration/RegistrationPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
