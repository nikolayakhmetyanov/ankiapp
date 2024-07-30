import styles from '@/styles/pages/study/StudyPage.module.scss';
import { TinderSlider } from '@/components/TinderSlider/TinderSlider';

const StudyPage = () => {
    return (
        <div className={styles.studyPage}>
            <div className={styles.container}>
                <TinderSlider />
            </div>
        </div>
    );
};

export default StudyPage;
