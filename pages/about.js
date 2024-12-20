import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.scss';
import { useState, useEffect } from 'react';
import { FaCode, FaFacebook, FaLinkedin, FaRegFileAlt, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const [showLanguages, setShowLanguages] = useState(false);
    const [showSocials, setShowSocials] = useState(false);
    const [showReferences, setShowReferences] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const toggleLanguages = () => setShowLanguages(!showLanguages);
    const toggleSocials = () => setShowSocials(!showSocials);
    const toggleReferences = () => setShowReferences(!showReferences);
    const toggleInfo = () => setShowInfo(!showInfo);

    // Dynamically import Bootstrap JS to prevent 'document is not defined' error
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

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

                {/* Carrusel de Bootstrap */}
                <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/imagenes/img1.jpg" className="d-block w-100" alt="Imagen 1" />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/imagenes/img2.jpg" className="d-block w-100" alt="Imagen 2" />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/imagenes/img3.jpg" className="d-block w-100" alt="Imagen 3" />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#aboutCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#aboutCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>

                <div className={styles.cardsContainer}>
                    <div className={styles.card} onClick={toggleLanguages}>
                        <FaCode className={styles.icon} />
                        <h3>Lenguajes de código</h3>
                    </div>
                    <div className={styles.card} onClick={toggleSocials}>
                        <FaFacebook className={styles.icon} />
                        <h3>Redes Sociales</h3>
                    </div>
                    <div className={styles.card} onClick={toggleReferences}>
                        <FaRegFileAlt className={styles.icon} />
                        <h3>Referencias de trabajo</h3>
                    </div>
                    <div className={styles.card} onClick={toggleInfo}>
                        <FaUser className={styles.icon} />
                        <h3>Información Personal</h3>
                    </div>
                </div>

                {showLanguages && (
                    <div className={`${styles.languageList} ${styles.animate}`}>
                        <ul>
                            <li className={`${styles.javascript}`}>
                                <img src="/imagenes/js.png" alt="JavaScript" className={styles.languageImage} />
                                JavaScript
                            </li>
                            <li className={`${styles.python}`}>
                                <img src="/imagenes/python.png" alt="Python" className={styles.languageImage} />
                                Python
                            </li>
                            <li className={`${styles.java}`}>
                                <img src="/imagenes/java.png" alt="Java" className={styles.languageImage} />
                                Java
                            </li>                   
                        </ul>
                    </div>
                )}

                {showSocials && (
                    <div className={`${styles.socialList} ${styles.animate}`}>
                        <ul>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/imagenes/face.png" alt="Facebook" className={styles.socialImage} />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/imagenes/ln.png" alt="LinkedIn" className={styles.socialImage} />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/imagenes/gh.jpg" alt="GitHub" className={styles.socialImage} />
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

                {showReferences && (
                    <div className={`${styles.referencesList} ${styles.animate}`}>
                        <ul>
                            <li>Trabajo en proyecto de desarrollo web para XYZ Company.</li>
                            <li>Colaboración en aplicación de gestión para ABC Organization.</li>
                            <li>Freelance en diseño de interfaces para varias startups.</li>
                        </ul>
                    </div>
                )}

                {showInfo && (
                    <div className={`${styles.infoList} ${styles.animate}`}>
                        <p>Nombre: Anyela Jenifer Batallanos Cuti</p>
                        <p>Correo: btctanyela@gmail.com</p>
                        <p>Teléfono: (+51) 931 754 414</p>
                        <p>Ubicación: Arequipa, Perú</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default About;
