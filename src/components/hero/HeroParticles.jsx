import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function HeroParticles() {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="heroParticles"
      init={init}
      className="hero-particles"
      options={{
        fullScreen: false,

        particles: {
          number: {
            value: 90,
          },

          color: {
            value: "#6dfffd",
          },

          links: {
            enable: true,
            color: "#6dfffd",
            distance: 180,
            opacity: 0.35,
            width: 1.2,
          },

          move: {
            enable: true,
            speed: 0.8,
          },

          opacity: {
            value: 0.8,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 180,

              links: {
                opacity: 0.5,
              },
            },
          },
        },
      }}
    />
  );
}

export default HeroParticles;