import { motion } from "framer-motion";

export default function Proyectos() {
  return (
    <section className="seccion-proyectos-3d" id="proyectos">
      {/* Fondo 3D en CSS Puro */}
      <div className="grid-3d-background">
        <div className="grid-plane" />
      </div>

      <div className="contenido-proyectos">
        <div className="subtitulo-verde">— PORTAFOLIO</div>
        <h2 className="titulo-seccion-centro">Proyectos</h2>

        <div className="tarjeta-construccion">
          <motion.div
            className="icono-wrapper"
            animate={{
              y: [0, -12, 0], // Sube y baja 12px
              rotate: [0, 8, -6, 0], // Meneito suave hacia los lados
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut", // Suavizado de aceleración
            }}
          >
            🚀
          </motion.div>
          <h3>Sección en Construcción</h3>
          <p>
            Estoy seleccionando y documentando mis mejores proyectos para
            mostrar la arquitectura, stack tecnológico y demos en vivo.
          </p>
          <span className="badge-proximamente">PRÓXIMAMENTE · 2026</span>
        </div>
      </div>
    </section>
  );
}
