import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0 // Below everything
      }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: true,
          }
        },
        particles: {
          color: {
            value: "#ffffff", // Pure white dust
          },
          links: {
            enable: false,
          },
          move: {
            direction: "top", // Dust floats upwards
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: { min: 0.1, max: 0.5 }, // Very slow
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40, // Sparse dust
          },
          opacity: {
            value: { min: 0.1, max: 0.4 }, // Barely visible
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 }, // Tiny
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
