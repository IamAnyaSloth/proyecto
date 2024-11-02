import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.scss';

const About = () => {
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
            <div className={styles.aboutSection}>
                <h2>Sobre MÍ</h2>
                <p>
                    Desarrolladora web apasionada por la tecnología y la innovación. 
                    Mi objetivo es crear soluciones digitales que no solo sean funcionales 
                    sino también estéticamente agradables. Siempre estoy aprendiendo y 
                    explorando nuevas herramientas y tecnologías para mejorar mis habilidades 
                    y ofrecer lo mejor en cada proyecto.
                </p>
                <div className={styles.skillsContainer}>
                    <div className={styles.skill}>
                        <h3>Lenguajes de código</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Redes Sociales</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Referencias de trabajo</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Información Personal</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
