import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={styles.container}>
      
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.hero}
      >
        <h1 style={styles.title}>Hi, I'm Sujith Reddy 👋</h1>
        <p style={styles.subtitle}>
          Computer Science student at Mahindra University with a strong interest
          in Artificial Intelligence, Machine Learning, and full-stack development.
        </p>
      </motion.div>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I am a passionate tech enthusiast who enjoys building real-world
          applications and solving complex problems. I have experience working
          with multiple programming languages and frameworks, and I am constantly
          learning new technologies to improve my skills.
        </p>
      </section>

      {/* EDUCATION */}
      <section style={styles.section}>
        <h2>Education</h2>
        <p>
          🎓 B.Tech in Computer Science – Mahindra University (2023 – Present)
        </p>
        <p>📘 Relevant Coursework: AI, ML, OS, DBMS</p>
      </section>

      {/* SKILLS */}
      <section style={styles.section}>
        <h2>Skills</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Programming</h3>
            <p>C, C++, Python, Java</p>
          </div>

          <div style={styles.card}>
            <h3>Web & Tools</h3>
            <p>JavaScript, React, SQL, MATLAB</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={styles.section}>
        <h2>Contact</h2>
        <p>📞 8688583286</p>
        <p>📧 sujith.200513@gmail.com</p>
        <p>🎓 Mahindra University</p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "60px",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    color: "white",
  },

  hero: {
    marginBottom: "40px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: "10px",
    color: "#94a3b8",
    maxWidth: "600px",
  },

  section: {
    marginTop: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "10px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "12px",
  },
};