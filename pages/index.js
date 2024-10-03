import Head from 'next/head';
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

const Home = () => {
    const profiles = [
        { name: 'Desarrollo Web', description: 'Construyo aplicaciones web innovadoras y funcionales.' },
        { name: 'Consultoría', description: 'Optimiza tus soluciones tecnológicas con mi asesoramiento.' }
    ];

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Portafolio de Anyela, desarrolladora web con innovación y creatividad." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
                <title>Mi Portafolio</title>
            </Head>

            <Header />

            <Hero />

            <div className={styles.servicios}>
                <h1>Servicios</h1>
                <div className={styles.serviciosContainer}>
                    {profiles.map((profile, index) => (
                        <ProfileCard key={index} {...profile} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
