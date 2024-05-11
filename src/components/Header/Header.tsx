import classNames from 'classnames';
import styles from './Header.module.scss';
import Image from 'next/image';
import { BritishFlagIcon } from '@/components/Icon/BritishFlagIcon';
import { GermanyFlagIcon } from '@/components/Icon/GermanyFlagIcon';
import { SettingIcon } from '@/components/Icon/SettingIcon';
import Link from 'next/link';
import { playfair } from '@/fonts/fonts';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.innerWrap}>
                    <div className={styles.logo}>
                        <Image src="/logo.jpg" alt="WordWise" width={640} height={640} />
                        <span className={playfair.className}>WordWise</span>
                    </div>
                    <nav className={styles.langs}>
                        <button className={classNames(styles.langItem, styles.langItemActive)}>
                            <BritishFlagIcon />
                        </button>
                        <button className={classNames(styles.langItem)}>
                            <GermanyFlagIcon />
                        </button>
                    </nav>
                    <Link href="/settings" className={styles.settingLink}>
                        <SettingIcon />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
