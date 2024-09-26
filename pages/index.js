// pages/index.js
import ProfileCard from '../components/ProfileCard'; // Asegúrate de la ruta correcta

export default function Home() {
  return (
    <div>
      <h1>Hola, Next.js está funcionando!</h1>
      <ProfileCard 
        name="Juan Pérez" 
        description="Desarrollador de software con pasión por la tecnología." 
        buttonText="Contactar" 
      />
    </div>
  );
}
