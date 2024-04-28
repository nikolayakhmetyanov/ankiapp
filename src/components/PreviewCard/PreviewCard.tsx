import Image from 'next/image';
import styles from './PreviewCard.module.scss';
const PreviewCard = ({ pathImage }) => {
    return (
        <div className={styles.card}>
            <Image src={pathImage} className={styles.img} alt="name" width={512} height={512} />
        </div>
    );
};

export default PreviewCard;
