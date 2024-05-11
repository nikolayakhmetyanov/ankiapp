'use client';

import styles from './TinderSlider.module.scss';
import classNames from 'classnames';
import { playfair } from '@/fonts/fonts';
import { Button } from '@/components/Button/Button';
import { useState } from 'react';
import { CheckBoldIcon } from '@/components/Icon/CheckBoldIcon';
import { CloseIcon } from '@/components/Icon/CloseIcon';
import { CloseBoldIcon } from '@/components/Icon/CloseBoldIcon';

const cards = [
    {
        id: 1,
        word: 'Owl',
        image: '/demo/cards/1.jpg',
        status: false,
    },
    {
        id: 2,
        word: 'Demo-2',
        image: '/demo/cards/2.jpg',
        status: false,
    },
    {
        id: 3,
        word: 'Demo-3',
        image: '/demo/cards/3.jpg',
        status: false,
    },
    {
        id: 4,
        word: 'Demo-4',
        image: '/demo/cards/4.jpg',
        status: false,
    },
    {
        id: 5,
        word: 'Demo-5',
        image: '/demo/cards/5.jpg',
        status: false,
    },
];

const TinderSlider = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setFlipped] = useState(false);
    const currentCard = cards[currentCardIndex];

    const handleClickIDontNow = () => {
        setFlipped(!isFlipped);
        setCurrentCardIndex((prevState) => prevState + 1);
    };
    const handleClickINow = () => {
        setFlipped(!isFlipped);
        setCurrentCardIndex((prevState) => prevState + 1);
    };
    const handleFlip = () => {
        setFlipped(prevState => !prevState);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.sliderItem}>
                <h2 className={classNames(styles.title, playfair.className)}>{currentCard.word}</h2>
                <div className={styles.wrapCards}>
                    <div
                        onClick={handleFlip}
                        key={currentCard.id}
                        className={classNames(styles.card, {
                            [styles.flipped]: isFlipped,
                        })}
                    >
                        <div className={styles.front}>
                            <div className={styles.wrapImg}>
                                <img className={styles.img} src={currentCard.image} alt="demo-1" />
                            </div>
                        </div>
                        <div className={styles.back}>
                            <div className="cardTranslateWord">Сова</div>
                            <div className="cardHowRememberTitle">Как запомнить</div>
                            <div className="cardHowRememberText">Как запомнить</div>
                            <div className="cardExampleTitle">Как запомнить</div>
                            <div className="cardExampleSourceText">Как запомнить</div>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapButtons}>
                    <Button type="ghost" onClick={handleClickIDontNow}>
                        <CloseBoldIcon fill="var(--danger-color)" />
                        Не знаю
                    </Button>
                    <Button type="ghost" onClick={handleClickINow}>
                        <CheckBoldIcon fill="var(--accent-color)" />
                        Знаю
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { TinderSlider };
