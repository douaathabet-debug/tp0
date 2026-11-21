import { useState } from "react";
import styles from "./destination.module.css";

function Destination({ image, nom, pays, description, prix }) {
    const [afficherDetails, setAfficherDetails] = useState(false);
    const [estFavori, setEstFavori] = useState(false);
    const [message, setMessage] = useState("");

    function toggleDetails() {
        setAfficherDetails(!afficherDetails);
    }

    function ajouterFavori() {
        if (estFavori) {
            setMessage("Cette destination est déjà dans vos favoris");
        } else {
            setEstFavori(true);
            setMessage("");
        }
    }

    function reinitialiser() {
        setAfficherDetails(false);
        setEstFavori(false);
        setMessage("");
    }

    return (
        <div className={styles.destination}>
            <img className={styles.image} src={image} alt={nom} />
            <h2 className={styles.titre}>{nom}</h2>
            <p className={styles.pays}>{pays}</p>
            {afficherDetails && <p className={styles.description}>{description}</p>}
            <h3 className={styles.prix}>{prix}</h3>

            <div className={styles.boutons}>
                <button className={styles.bouton} onClick={toggleDetails}>
                    {afficherDetails ? "Masquer les détails" : "Voir les détails"}
                </button>
                <button
                    className={`${styles.bouton} ${estFavori ? styles.favori : ""}`}
                    onClick={ajouterFavori}
                >
                    {estFavori ? "Dans mes favoris" : "Ajouter aux favoris"}
                </button>
                <button className={`${styles.bouton} ${styles.reset}`} onClick={reinitialiser}>
                    Réinitialiser
                </button>
            </div>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}

export default Destination;
