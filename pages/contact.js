import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard'; // Si no lo usas, lo puedes eliminar
import styles from '../styles/Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario (recarga de página)

    // Obtén los valores del formulario
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // Validación básica antes de enviar el correo
    if (!data.name || !data.email || !data.message) {
      alert('Por favor, completa todos los campos antes de enviar el mensaje.');
      return;
    }

    // Envía los datos a EmailJS
    emailjs.sendForm('service_h622jqc', 'template_wq94v8r', form, 'WyB425g-84qgWPS1p')
      .then((result) => {
        console.log('Correo enviado:', result.text);
        alert('¡Tu mensaje ha sido enviado correctamente!');
      }, (error) => {
        console.log('Error al enviar correo:', error.text);
        alert('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
      });
  };

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
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
          <label>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            Nombre:
            <input type="text" name="name" placeholder="Tu nombre" required />
          </label>
          <label>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            Correo Electrónico:
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
          </label>
          <label>
            <FontAwesomeIcon icon={faCommentDots} className={styles.icon} />
            Mensaje:
            <textarea name="message" placeholder="Escribe tu mensaje" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
