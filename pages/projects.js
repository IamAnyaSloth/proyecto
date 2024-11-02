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
                <div className={styles['project-icon']}></div>
                <div className={styles['project-info']}>
                  <h3>Proyecto 1</h3>
                  <p>Una breve descripción del proyecto.</p>
                </div>
              </div>
              <div className={styles['project-card']}>
                <div className={styles['project-icon']}></div>
                <div className={styles['project-info']}>
                  <h3>Proyecto 2</h3>
                  <p>Una breve descripción del proyecto.</p>
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
