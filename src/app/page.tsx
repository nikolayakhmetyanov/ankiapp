import classNames from 'classnames';
import { playfair } from '@/fonts/fonts';
import styles from '@/styles/pages/HomePage.module.scss';
import PreviewCard from '@/components/PreviewCard/PreviewCard';
import { CreateCard } from '@/components/CreateCard/CreateCard';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={classNames(playfair.className, styles.title)}>Мои слова</h1>
            <div className={classNames(styles.gridMobile)}>
                <div className={styles.col}>
                    <CreateCard />
                    <PreviewCard pathImage="/demo/cards/1.jpg" />
                    <PreviewCard pathImage="/demo/cards/2.jpg" />
                    <PreviewCard pathImage="/demo/cards/3.jpg" />
                </div>
                <div className={styles.col} style={{ marginTop: 30 }}>
                    <PreviewCard pathImage="/demo/cards/4.jpg" />
                    <PreviewCard pathImage="/demo/cards/5.jpg" />
                    <PreviewCard pathImage="/demo/cards/6.jpg" />
                    <PreviewCard pathImage="/demo/cards/7.jpg" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
