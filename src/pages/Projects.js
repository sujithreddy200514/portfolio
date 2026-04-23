import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div style={styles.container}>
      <h1>Projects</h1>

      <motion.div style={styles.card}>
        <h3>Zelda Reloaded</h3>
        <p>
          Developed a 2D top-down RPG game engine with optimized rendering and
          smooth gameplay mechanics.
        </p>
        <a href="https://github.com/sujithreddy200514" target="_blank" rel="noreferrer">
          View Code
        </a>
      </motion.div>

      <motion.div style={styles.card}>
        <h3>Telemetry Dashboard</h3>
        <p>
          Built a real-time data visualization system using modern web
          technologies to monitor sensor data.
        </p>
        <a href="https://github.com/sujithreddy200514" target="_blank" rel="noreferrer">
          View Code
        </a>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px",
    minHeight: "100vh",
    background: "#020617",
    color: "white",
  },

  card: {
    marginTop: "20px",
    padding: "20px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "12px",
  },
};