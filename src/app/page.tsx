import classNames from 'classnames';
import { playfair } from '@/fonts/fonts';
import styles from '@/styles/pages/HomePage.module.scss';
import { GridHomePage } from '@/components/GridHomePage/GridHomePage';
import { PlayIcon } from '@/components/Icon/PlayIcon';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={classNames(playfair.className, styles.title)}>Мои слова</h1>
            <GridHomePage />
            <div className={styles.wrapPlayButton}>
                <Link href="/study">
                    <Button className="buttonas">
                        <PlayIcon />
                        Play
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
