import classNames from 'classnames';
import styles from '@/styles/app/HomePage.module.scss';
import { GridHomePage } from '@/components/GridHomePage/GridHomePage';
import { PlayIcon } from '@/components/Icon/PlayIcon';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={classNames(styles.title)}>Мои слова</h1>

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
