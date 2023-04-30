import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesConfig } from "./ParticlesConfig";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <motion.div
      className="banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      />
      <motion.div
        className="banner-text"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        <motion.h1
          className="name"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >
          Dataverse:
        </motion.h1>
        <motion.h1
          className="tag"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 2 }}
        >
          Explore the Cosmos Limitlessly!
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};
export default Banner;
