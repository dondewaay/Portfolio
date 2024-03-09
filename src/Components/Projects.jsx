import Screenshot from "/img/MultiRoll.jpeg";
import Character from "/img/Character.jpeg";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const Projects = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="projects"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="hero">
        <h2>
          No.1: MultiRoll, <br />a Dungeons and
          <br />
          Dragons Companion
        </h2>
        <AnimatePresence>
          <motion.div
            className="learn-more"
            key="learn"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Check it Out Below&nbsp;</p>
            <motion.p
              animate={{ y: [0, 0, -5, 5, 0, 0] }}
              transition={{
                repeat: Infinity,
                type: "Spring",
                duration: 1.5,
              }}
            >
              vVv
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="info-container">
        <p>
          MultiRoll is a slick web tool created to streamline encounters and
          dice rolling in D&D
        </p>
        <img src={Screenshot} />
      </div>
      <div className="info-container">
        <img src={Character} />
        <p>
          Features include a character creator with dynamic personalization
          options, a quick roller for non-combat scenarios, and motion graphics
          utilizing Three.js and Framer Motion React libraries
        </p>
      </div>
    </motion.div>
  );
};

export default Projects;