import styles from './CreateCard.module.scss';
import { PlusIcon } from '@/components/Icon/PlusIcon';
const CreateCard = () => {
    return (
        <div className={styles.card}>
            <PlusIcon />
        </div>
    );
};

export { CreateCard };
