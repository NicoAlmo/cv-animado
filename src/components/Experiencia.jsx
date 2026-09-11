import { useRef } from "react";
import { motion } from "framer-motion";

export default function Experiencia() {
  const refSeccion = useRef(null);

  const experiencias = [
    {
      cargo: "Desarrollador Web (Proyecto TARA)",
      empresa: "Servicio Social | UAA - Depto. Psicología",
      fecha: "2026 - ACTUAL",
      descripcion:
        "Colaboración en la arquitectura y desarrollo de una plataforma web de simulación terapéutica autoguíada. Implementación de interfaces interactivas y gestión de persistencia de datos.",
      techs: ["React", "JavaScript", "PostgreSQL", "HTML/CSS"],
    },
    {
      cargo: "Técnico en Programación",
      empresa: "CBTis 168",
      fecha: "FORMACIÓN TÉCNICA",
      descripcion:
        "Construcción de bases sólidas en desarrollo de software, lógica de programación, gestión de bases de datos relacionales y aplicaciones de escritorio.",
      techs: ["Lógica de Programación", "C++", "Java", "SQL"],
    },
  ];

  return (
    <section ref={refSeccion} className="seccion-experiencia" id="experiencia">
      <div className="encabezado-seccion">
        <div>
          <div className="subtitulo-verde">— TRAYECTORIA PROFESIONAL</div>
          <h2 className="titulo-seccion">Experiencia</h2>
          <p className="descripcion-seccion">
            Experiencias donde he convertido ideas en soluciones, aprendido de
            equipos reales y fortalecido mi perfil en desarrollo de software.
          </p>
        </div>

        <div className="widget-experiencia">
          <span className="icono-maletin">💼</span>
          <div>
            <div className="texto-widget-numero">
              {experiencias.length} experiencias
            </div>
            <div className="texto-widget-sub">Desarrollo · Base de datos</div>
          </div>
        </div>
      </div>

      <div className="contenedor-timeline">
        {experiencias.map((exp, index) => (
          <motion.div
            key={index}
            className="item-timeline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="indicador-nodo" />

            <div className="tarjeta-experiencia">
              <div className="encabezado-tarjeta">
                <div>
                  <h3 className="cargo">{exp.cargo}</h3>
                  <p className="empresa-lugar">{exp.empresa}</p>
                </div>
                <span className="badge-fecha">{exp.fecha}</span>
              </div>

              <p className="detalles-experiencia">{exp.descripcion}</p>

              <div className="tags-tecnologias">
                {exp.techs.map((tech, idx) => (
                  <span key={idx} className="tag-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
