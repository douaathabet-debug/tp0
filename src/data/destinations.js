import santorini from "../assets/santorini.jpg";
import bali from "../assets/bali.jpg";
import rome from "../assets/Rome.jpg";

const destinations = [
    {
        id: 1,
        image: santorini,
        nom: "Santorin",
        pays: "Grèce",
        description: "Découvrez les magnifiques paysages des îles grecques.",
        prix: "1200 DT",
    },
    {
        id: 2,
        image: bali,
        nom: "Bali",
        pays: "Indonésie",
        description: "Plages, temples et rizières au cœur de l'île des dieux.",
        prix: "1800 DT",
    },
    {
        id: 3,
        image: rome,
        nom: "Rome",
        pays: "Italie",
        description: "Plongez dans l'histoire de la ville éternelle.",
        prix: "950 DT",
    },
];

export default destinations;
