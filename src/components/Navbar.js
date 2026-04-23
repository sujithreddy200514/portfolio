import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>Sujith</h2>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>
          Home
        </NavLink>
        <NavLink to="/projects" style={styles.link}>
          Projects
        </NavLink>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",

    // ✅ Pure black navbar
    backgroundColor: "#000",

    // subtle bottom border (premium feel)
    borderBottom: "1px solid #222",

    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s",
  },
};