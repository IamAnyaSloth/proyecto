// components/ProfileCard.jsx
import React from 'react';
import styles from '../styles/ProfileCard.module.scss'; // Importa los estilos SASS

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
