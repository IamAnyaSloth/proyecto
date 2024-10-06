import React from 'react';
import Link from 'next/link'; 

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/about">Sobre MÍ</Link></li>
                    <li><Link href="/projects">Proyectos</Link></li>
                    <li><Link href="/contact">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
