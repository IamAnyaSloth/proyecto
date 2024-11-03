import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Projects.module.scss';

const Projects = () => {
  return (
    <>  
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Sobre mí - Portafolio de Anyela, desarrolladora web con innovación y creatividad." />
        <link rel="icon" href="/favicon.ico" />
        <title>Sobre MÍ - Mi Portafolio</title>
      </Head>

      <Header />
      <div className={styles['projects-container']}>
      <h2>Proyectos</h2>
        <div className={styles['projects-bottom-section']}>
          <div className={styles['projects-list-container']}>
            <div className={styles['projects-list']}>
              <div className={styles['project-card']}>
                <div className={styles['project-icon']}>
                <img src="/imagenes/comida.png" alt="Logo de Restaurante" />
                </div>
                <div className={styles['project-info']}>
                  <h3>Proyecto Restaurante</h3>
                  <p>Este proyecto web se desarrolló utilizando el framework Spring, con un backend implementado en Eclipse para el manejo de datos relacionados con reservas y usuarios, así como la conexión a bases de datos.</p>
                </div>
              </div>
              <div className={styles['project-card']}>
                <div className={styles['project-icon']}>
                <img src="/imagenes/carro.jpg" alt="Logo de Carro" />
                </div>
                <div className={styles['project-info']}>
                  <h3>Proyecto Renta de carros</h3>
                  <p>Este proyecto web de renta de carros se desarrolló en Java utilizando NetBeans y PostgreSQL. Permite a los usuarios buscar vehículos disponibles y realizar reservas en línea, ofreciendo una interfaz intuitiva para una experiencia de usuario fluida.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
