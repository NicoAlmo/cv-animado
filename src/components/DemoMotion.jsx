import { motion } from "framer-motion";

export default function DemoMotion() {
  return (
    <div className="contenedor-centrado">
      <motion.div
        className="tarjeta-demo"
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 30,
        }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <h3>✨ Animación al Cargar</h3>
        <p>HOla soy nico, estoy practicando mi motion</p>
      </motion.div>
    </div>
  );
}
