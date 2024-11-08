import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
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

      <div className={styles['contact-container']}>
        <h2>Contacto</h2>
        <form className={styles['contact-form']}>
          <label>Nombre:
            <input type="text" placeholder="Tu nombre" />
          </label>
          <label>Correo Electrónico:
            <input type="email" placeholder="Tu correo electrónico" />
          </label>
          <label>Mensaje:
            <textarea placeholder="Escribe tu mensaje"></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
