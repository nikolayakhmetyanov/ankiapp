import styles from './CreateCard.module.scss';
import { PlusIcon } from '@/components/Icon/PlusIcon';
const CreateCard = () => {
    return (
        <button className={styles.card}>
            <PlusIcon />
        </button>
    );
};

export { CreateCard };
