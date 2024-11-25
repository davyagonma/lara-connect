import React, { useState, useEffect } from "react";
import google from "../../../public/assets/logo/google.png";
import facebook from "../../../public/assets/logo/facebook.png";
import Logo from "../components/Logo";

const Sign = () => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [domaine, setDomaine] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({
        name: "Bénin",
        code: "+229",
        flag: "https://flagcdn.com/w320/bj.png",
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await axios.post("http://localhost:8000/api/register", {
                nom: nom,
                prenom: prenom,
                domaine: domaine,
                telephone: telephone,
                email: email,
                password: password,
            });
            setLoading(false);
    
            if (response.status === 200) {
                // Succès : Traitez les données renvoyées (par exemple, un token JWT)
                console.log("Connexion réussie :", response.data);
                // Vous pouvez rediriger l'utilisateur ou sauvegarder le token
                window.location.href = "/";
    
            } else {
                // Gérez les cas où la connexion échoue
                setErrorMessage("Email ou mot de passe incorrect.");
                console.error("Erreur de connexion :", response.data);
            }
        } catch (error) {
            // Gérez les erreurs réseau ou serveur
            setLoading(false);
            setErrorMessage("Une erreur est survenue. Réessayez plus tard.");
            console.error("Erreur réseau ou serveur :", error.message);
        }

    }
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(
                    "https://restcountries.com/v3.1/all"
                );
                const data = await response.json();

                const countryData = data.map((country) => ({
                    name: country.name.common,
                    code: country.idd?.root
                        ? `${country.idd.root}${
                              country.idd.suffixes?.[0] || ""
                          }`
                        : "",
                    flag: country.flags?.png,
                }));

                const sortedCountries = countryData.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                setCountries(sortedCountries);

                const defaultCountry = sortedCountries.find(
                    (c) => c.name === "Bénin"
                );
                if (defaultCountry) setSelectedCountry(defaultCountry);
            } catch (error) {
                console.error("Erreur lors du chargement des pays :", error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    return (
        <div className="lg:absolute lg:top-[70%] 2xl:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mx-auto my-0 max-w-72 lg:max-w-md mb-0 lg:mb-20 2xl:mb-0 bg-white shadow-lg rounded-lg p-3 lg:p-6 w-full">
            <div className="flex justify-center">
                <Logo />
            </div>

            <h2 className="text-lg font-bold mb-4 text-center">
                Créez votre compte
            </h2>

            <form onSubmit={handleRegister}>
                <div className="flex flex-row gap-4">
                    <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Nom
                        </label>
                        <input
                            type="nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            placeholder="Nom"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                        />
                    </div>
                    <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Prénoms
                        </label>
                        <input
                            type="prenom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            placeholder="Prénoms"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Domaine
                    </label>
                    <input
                        type="domaine"
                        value={domaine}
                        onChange={(e) => setDomaine(e.target.value)}
                        placeholder="Domaine"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    />
                </div>

                <div className="mb-4 flex items-center space-x-2">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Téléphone
                        </label>

                        <div
                            className="relative w-28 flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img
                                src={selectedCountry.flag}
                                alt={selectedCountry.name}
                                className="w-6 h-6 mr-2"
                            />
                            <span>{selectedCountry.code}</span>
                        </div>

                        {isOpen && (
                            <div className="absolute bg-white border border-gray-300 mt-2 rounded-md shadow-lg z-10 w-80 max-h-60 overflow-y-auto">
                                {countries.map((country) => (
                                    <div
                                        key={country.code}
                                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() =>
                                            handleCountrySelect(country)
                                        } // Sélectionner un pays
                                    >
                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="w-6 h-6 mr-2"
                                        />
                                        <span className="mr-2">
                                            {country.name}
                                        </span>
                                        <span>{country.code}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <input
                        type="tel"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder="90 01 12 34"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 cursor-pointer text-primary focus:ring-black border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            J'accepte les Conditions et Politiques
                            d'Utilisation.
                        </span>
                    </label>
                </div>

                <button
                    type="submit"
                    className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none${
                        loading ? "bg-gray-500" : "bg-primary"
                    }`}
                >
                    {loading ? "Chargement..." : "Créer un compte gratuitement"}
                </button>

                {errorMessage && (
                    <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>
                )}

                <div className="flex items-center gap-2 mt-4">
                    <p className="text-sm text-gray-600">
                        Vous avez déjà un compte ?
                        <a
                            href="/login"
                            className="text-primary hover:underline ml-2"
                        >
                            Se connecter
                        </a>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Ou connectez-vous avec
                    </p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <button
                            type="button"
                            className="flex items-center justify-center w-32 hover:bg-black hover:bg-opacity-25 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            <img
                                src={google}
                                alt="Google logo"
                                className="w-5 h-5 mr-2"
                            />
                            Google
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center w-32 hover:bg-black hover:bg-opacity-25 px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            <img
                                src={facebook}
                                alt="Facebook logo"
                                className="w-5 h-5 mr-2"
                            />
                            Facebook
                        </button>
                    </div>
                </div>

                <p className="mt-4 text-xs text-gray-500 text-center">
                    En cliquant sur "Créer mon compte", vous acceptez les{" "}
                    <a href="#" className="text-primary underline">
                        Conditions Générales d'Utilisation
                    </a>{" "}
                    et la{" "}
                    <a href="#" className="text-primary underline">
                        Politique de confidentialité
                    </a>
                    .
                </p>
            </form>
        </div>
    );
};

export default Sign;
