import styles from '../styles/ProfileCard.module.scss';

const ProfileCard = ({ name, description, buttonText }) => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.header}>{name}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.footer}>
                <button className={styles.button}>{buttonText}</button>
            </div>
        </div>
    );
};

export default ProfileCard;
