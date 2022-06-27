import { Link } from "react-router-dom";

import { AiOutlineLogout } from "react-icons/ai";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 3,
    height: 30,
    cursor: "pointer",
    backgroundColor: "#eee",
    padding: "5px 10px",
    borderRadius: 4,
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: 20,
  },
  icon: { color: "#d63e2f" },
  text: {
    color: "#d63e2f",
    fontSize: 15,
    padding: 0,
    margin: 0,
  },
};

const LogOutLink = () => (
  <Link to="/" style={styles.link}>
    <div style={styles.container}>
      <AiOutlineLogout style={styles.icon} />

      <p style={styles.text}>Log out</p>
    </div>
  </Link>
);

export default LogOutLink;