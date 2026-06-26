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
        zIndex: 1 // Above background, below main content
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
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 120,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: ["#111111", "#fffc00", "#ff003c", "#00f0ff"], // Black, Yellow, Red, Cyan
          },
          links: {
            enable: false, // No links, looks more raw and disconnected
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: { min: 2, max: 6 }, // Faster, erratic
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30, // Fewer but more distinct
          },
          opacity: {
            value: 1, // Solid, no transparency
          },
          shape: {
            type: ["square", "triangle", "polygon"], // Geometric shapes
            options: {
              polygon: { sides: 6 } // Hexagons
            }
          },
          size: {
            value: { min: 8, max: 24 }, // Larger
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
              enable: true,
              speed: 15
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
