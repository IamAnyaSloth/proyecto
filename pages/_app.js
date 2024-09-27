// pages/_app.js
import '../styles/globals.scss'; // Importa los estilos globales

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
