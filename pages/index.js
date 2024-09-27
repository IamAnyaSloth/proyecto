// pages/index.js
import Head from 'next/head';
import ProfileCard from '../components/ProfileCard'; // Importa tu componente de tarjeta de perfil
import styles from '../styles/Home.module.scss'; // Importa los estilos SASS

const Home = () => {
    const profiles = [
        { name: 'Desarrollo Web', description: 'Construyo aplicaciones web innovadoras y funcionales.', buttonText: 'Ver mas' },
        { name: 'Consultoría', description: 'Optimiza tus soluciones tecnológicas con mi asesoramiento.', buttonText: 'Ver más' }
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

            <header>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre Mi</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            <div className={styles.hero}>
                <div className={styles.intro}>
                    <h1>Hola, soy Anyela</h1>
                    <p>Desarrolladora web con un toque de innovación</p>
                    <a href="#" className={styles.btn}>Ver proyectos</a>
                </div>
            </div>

            <div className={styles.servicios}>
                <h2>Servicios</h2>
                <div className={styles.serviciosContainer}>
                    {profiles.map((profile, index) => (
                        <ProfileCard key={index} {...profile} />
                    ))}
                </div>
            </div>

            <footer>
                <p>© 2024 Mi Portafolio</p>
            </footer>
        </>
    );
};

export default Home;
