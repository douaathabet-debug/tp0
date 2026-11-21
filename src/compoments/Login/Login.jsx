
import { useState } from "react";

function Login() {
    const [email, setemail] = useState("");
    const [passsword, setpassword] = useState("");
    const [error, seterror] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        let newErreur = {};

        if (email.trim() === "")
            newErreur.email = "veuillez introduire un Email";
        else if (!/^\S+@\S+\.\S+$/.test(email))
            newErreur.email = "veuillez introduire un Email valide !";

        if (passsword.trim() === "")
            newErreur.passsword = "veuillez intoduire un mdp";
        else if (passsword.length < 8)
            newErreur.passsword = "la taille du mdp doit etre superieur a 8";
        else if (!/[A-Z]/.test(passsword))
            newErreur.passsword = "votre mdp doit contenir au moins une lettre majuscule";
        else if (!/[0-9]/.test(passsword))
            newErreur.passsword = "votre mdp doit contenir au moins un chiffre";
        else if (!/[^A-Za-z0-9]/.test(passsword))
            newErreur.passsword = "votre mdp doit contenir au moins un caractere special";

        seterror(newErreur);

        if (Object.keys(newErreur).length === 0) {
            alert("enregistrement avec success!");
            console.log("email:" + email);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">mail</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                    {error.email && <p>{error.email}</p>}
                </div>

                <div>
                    <label htmlFor="password">passsword</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={passsword}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    {error.passsword && <p>{error.passsword}</p>}
                </div>

                <div>
                    <button type="submit">enregistere</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
