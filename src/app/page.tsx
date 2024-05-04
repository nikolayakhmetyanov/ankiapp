import classNames from 'classnames';
import { playfair } from '@/fonts/fonts';
import styles from '@/styles/pages/HomePage.module.scss';
import PreviewCard from '@/components/PreviewCard/PreviewCard';
import { CreateCard } from '@/components/CreateCard/CreateCard';
import { GridHomePage } from '@/components/GridHomePage/GridHomePage';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={classNames(playfair.className, styles.title)}>Мои слова</h1>
            <GridHomePage />
        </div>
    );
};

export default HomePage;
