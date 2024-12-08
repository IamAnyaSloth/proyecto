import '../styles/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect } from 'react';

// Configurar Font Awesome para evitar la adición automática de CSS
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    // Cargar Bootstrap solo en el cliente
    useEffect(() => {
        if (typeof window !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);
    
    return <Component {...pageProps} />;
}

export default MyApp;
