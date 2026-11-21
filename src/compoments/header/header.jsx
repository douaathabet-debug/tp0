import styles from "./header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <h1>Travel Agency</h1>
            <nav className={styles.nav}>
                <a href="#">Accueil</a>
                <a href="#">Destinations</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
