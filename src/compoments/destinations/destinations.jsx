import styles from "./destinations.module.css";
import Destination from "../destination/destination.jsx";
import destinations from "../../data/destinations.js";

function Destinations() {
    return (
        <main className={styles.destinations}>
            <h2 className={styles.titre}>Nos destinations</h2>
            <div className={styles.liste}>
                {destinations.map((d) => (
                    <Destination
                        key={d.id}
                        image={d.image}
                        nom={d.nom}
                        pays={d.pays}
                        description={d.description}
                        prix={d.prix}
                    />
                ))}
            </div>
        </main>
    );
}

export default Destinations;
