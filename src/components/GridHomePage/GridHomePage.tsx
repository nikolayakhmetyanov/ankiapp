'use client';

import classNames from 'classnames';
import { useWindowSize } from '@/hooks/useWindowSize';
import styles from '@/styles/pages/HomePage.module.scss';
import { CreateCard } from '@/components/CreateCard/CreateCard';
import PreviewCard from '@/components/PreviewCard/PreviewCard';

const GridHomePage = () => {
    const { breakpoint } = useWindowSize();
    console.log(breakpoint);

    return (
        <>
            {breakpoint === 'xs' ? (
                <div className={classNames(styles.gridMobile)}>
                    <div className={styles.mobileLeftCol}>
                        <CreateCard />
                        <PreviewCard pathImage="/demo/cards/1.jpg" />
                        <PreviewCard pathImage="/demo/cards/2.jpg" />
                        <PreviewCard pathImage="/demo/cards/3.jpg" />
                    </div>
                    <div className={styles.mobileRightCol}>
                        <PreviewCard pathImage="/demo/cards/4.jpg" />
                        <PreviewCard pathImage="/demo/cards/5.jpg" />
                        <PreviewCard pathImage="/demo/cards/6.jpg" />
                        <PreviewCard pathImage="/demo/cards/7.jpg" />
                    </div>
                </div>
            ) : (
                <div className={classNames(styles.grid)}>
                    <CreateCard />
                    <PreviewCard pathImage="/demo/cards/1.jpg" />
                    <PreviewCard pathImage="/demo/cards/2.jpg" />
                    <PreviewCard pathImage="/demo/cards/3.jpg" />
                    <PreviewCard pathImage="/demo/cards/4.jpg" />
                    <PreviewCard pathImage="/demo/cards/5.jpg" />
                    <PreviewCard pathImage="/demo/cards/6.jpg" />
                    <PreviewCard pathImage="/demo/cards/7.jpg" />
                </div>
            )}
        </>
    );
};

export { GridHomePage };
