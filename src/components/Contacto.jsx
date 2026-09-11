import { motion } from "framer-motion";

export default function Contacto() {
  const redes = [
    { nombre: "GitHub", url: "https://github.com", icono: "🐙" },
    { nombre: "LinkedIn", url: "https://linkedin.com", icono: "💼" },
    { nombre: "Email", url: "mailto:nicoalmo.code@gmail.com", icono: "✉️" },
  ];

  return (
    <section className="seccion-contacto" id="contacto">
      <div className="encabezado-contacto">
        <div className="subtitulo-verde">— HABLEMOS</div>
        <h2 className="titulo-seccion-centro">Contacto</h2>
      </div>

      <motion.div
        className="tarjeta-contacto-principal"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px", once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge de disponibilidad */}
        <div className="badge-disponible">
          <span className="punto-verde" /> DISPONIBLE PARA NUEVAS OPORTUNIDADES
        </div>

        <h3>¿Tienes una idea o una oportunidad?</h3>
        <p>
          Estoy abierto a colaborar en proyectos de software, desarrollo web y
          soluciones inteligentes. Escríbeme y construyamos algo valioso juntos.
        </p>

        {/* Datos clave */}
        <div className="info-contacto-directa">
          <a href="mailto:nicoalmo.code@gmail.com" className="item-info">
            <span className="icono-contacto">✉️</span>
            <div>
              <span className="etiqueta-info">EMAIL</span>
              <span className="valor-info">nicoalmo.code@gmail.com</span>
            </div>
          </a>

          <div className="item-info">
            <span className="icono-contacto">📍</span>
            <div>
              <span className="etiqueta-info">UBICACIÓN</span>
              <span className="valor-info">México, Aguascalientes</span>
            </div>
          </div>
        </div>

        {/* Botones de Redes Sociales */}
        <div className="contenedor-redes">
          {redes.map((red, idx) => (
            <a
              key={idx}
              href={red.url}
              target="_blank"
              rel="noreferrer"
              className="boton-red-social"
            >
              <span>{red.icono}</span>
              <span>{red.nombre}</span>
              <span className="flecha-link">↗</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
