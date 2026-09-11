import Hero from "./components/Hero";
import Experiencia from "./components/Experiencia";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
// import DemoKeyframes from "./components/DemoKeyframes";
// import DemoParallax from "./components/DemoParallax";
// import DemoMotion from "./components/DemoMotion";

function App() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)" }}>
      <Hero />
      <Experiencia />
      <Proyectos />
      <Contacto />
      {/* <DemoKeyframes />
      <DemoParallax />
      <DemoMotion /> */}
    </main>
  );
}

export default App;
