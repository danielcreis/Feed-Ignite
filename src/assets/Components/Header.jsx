import styles from "../Components/Header.module.css";
import igniteLogo from "../../assets/Image/ignite-logo.svg";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        <strong>Ignite Feed</strong>
      </header>
    </div>
  );
}
