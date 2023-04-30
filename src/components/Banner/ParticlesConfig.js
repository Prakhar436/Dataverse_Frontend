export const ParticlesConfig = {
    fullScreen: false,
    background: {
      color: {
        value: "#000000",
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
          distance: 400,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#5a91e2",
      },
      links: {
        color: "#5a91e2",
        distance: 120,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
          width: 1200,
          height: 400,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: ["circle", "triangle", "edge"],
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };
  