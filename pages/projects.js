// pages/projects.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Projects.module.scss'; // Asegúrate de crear este archivo de estilos

const Projects = () => {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Proyectos de Anyela, desarrolladora web con innovación y creatividad." />
                <link rel="icon" href="/favicon.ico" />
                <title>Proyectos - Mi Portafolio</title>
            </Head>

            <Header />
            <div className={styles.projectsSection}>
                <h1>Proyectos</h1>
                <div className={styles.projectCard}>
                    <h2>Proyecto 1</h2>
                    <p>Una breve descripción del proyecto.</p>
                </div>
                <div className={styles.projectCard}>
                    <h2>Proyecto 2</h2>
                    <p>Una breve descripción del proyecto.</p>
                </div>
                {/* Agrega más proyectos aquí */}
            </div>
            <Footer />
        </>
    );
};

export default Projects;
