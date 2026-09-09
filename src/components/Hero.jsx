import { MapPin, Mail } from "lucide-react";
import yo from "../assets/yo.jpeg";

export default function Hero() {
  return (
    <div className="contenedor-principal">
      {/* ------------para pruebas----------
      <div className="prueba-container">
        <div className="cajita"></div>
      </div> */}

      {/*----------- Sección del navBar ------------------*/}
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-icon">N</span>
          <span>NicoAlmo</span>
        </div>

        <div className="nav-links">
          <a href="#sobre-mi" className="active">
            Sobre mí
          </a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/*------------ Seccion contenido Hero --------------------- */}
      <section className="hero-content">
        {/* Columna Izquierda Información */}
        <div className="info-columna">
          <div className="badge-disponible">
            <span className="punto-verde"></span>
            DISPONIBLE PARA PROYECTOS
          </div>

          <h1 className="nombre-titulo">Nicolás Alvarado Moreno</h1>
          <h2 className="carrera-subtitulo">
            Estudiante de Computación Inteligente
          </h2>

          <p className="biografia">
            Me interesa el desarrollo de software y la creación de nuevas
            soluciones, buscando fortalecer continuamente mis conocimientos y
            habilidades. Busco seguir creciendo mediante proyectos reales y
            adquirir experiencia profesional.
          </p>

          <div className="tags-contacto">
            <div className="tag-item">
              <MapPin size={15} /> México, Aguascalientes
            </div>
            <div className="tag-item">
              <Mail size={15} /> nicoalmo.code@gmail.com
            </div>
          </div>
        </div>

        {/* Columna derecha Imagen */}
        <div className="contenedor-foto">
          <div className="marco-foto">
            <img src={yo} alt="Nicolás Alvarado Moreno" />
          </div>
        </div>
      </section>
    </div>
  );
}
