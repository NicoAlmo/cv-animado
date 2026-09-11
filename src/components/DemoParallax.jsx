import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DemoParallax() {
  const refSeccion = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refSeccion,
    offset: ["start end", "end start"],
  });

  // Transforma el progreso del scroll (0 a 1) en píxeles (-50px a 50px)
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={refSeccion} className="seccion-demo-parallax">
      <motion.div style={{ y: yParallax }} className="caja-flotante">
        👻 Floto con Scroll
      </motion.div>
    </section>
  );
}
