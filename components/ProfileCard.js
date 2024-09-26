// components/ProfileCard.jsx
import React from 'react';
import styles from 'C:/Users/Usuario/css-proyecto/proyecto/styles/ProfileCard.module.scss'; // Importa los estilos SASS

function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <h2 className={styles.profileTitle}>Anyela</h2>
      <p className={styles.profileDescription}>
        Desarrolladora web con un toque de innovación.
      </p>
    </div>
  );
}

export default ProfileCard;