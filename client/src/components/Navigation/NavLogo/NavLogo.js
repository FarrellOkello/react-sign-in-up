import { styles } from "./styles";

const NavLogo = () => (
  <div style={styles.container}>
    <div variant="h4" style={styles.logo}>
      SHS
    </div>

    <div style={styles.text}>
      <p style={{ margin: 0 }}>State House</p>
      <p style={{ margin: 0 }}>Sponsorship</p>
    </div>
  </div>
);

export default NavLogo;
