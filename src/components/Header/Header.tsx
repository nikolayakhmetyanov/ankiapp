import classNames from 'classnames';
import styles from './Header.module.scss';
import { BritishFlagIcon } from '@/components/Icon/BritishFlagIcon';
import { GermanyFlagIcon } from '@/components/Icon/GermanyFlagIcon';
import { SettingIcon } from '@/components/Icon/SettingIcon';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.innerWrap}>
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
