import React, { useState, useEffect } from "react";
import google from "../../../public/assets/logo/google.png";
import facebook from "../../../public/assets/logo/facebook.png";
import Logo from "../components/Logo";

const Sign = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({
        name: "Bénin",
        code: "+229",
        flag: "https://flagcdn.com/w320/bj.png",
    });
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
        <div className="lg:absolute lg:top-[70%] 2xl:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mx-auto my-0 max-w-72 lg:max-w-md mb-0 lg:mb-20 2xl:mb-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 lg:p-6 w-full">
            <div className="flex justify-center">
                <Logo />
            </div>

            <h2 className="text-lg font-bold mb-4 text-center text-gray-800 dark:text-white">
                Créez votre compte
            </h2>

            <form>
                <div className="flex flex-row gap-4">
                    <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Nom
                        </label>
                        <input
                            type="nom"
                            placeholder="Nom"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-black focus:border-black"
                        />
                    </div>
                    <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Prénoms
                        </label>
                        <input
                            type="prenom"
                            placeholder="Prénoms"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-black focus:border-black"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Domaine
                    </label>
                    <input
                        type="domaine"
                        placeholder="Domaine"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    />
                </div>

                <div className="mb-4 flex items-center space-x-2">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Téléphone
                        </label>

                        <div
                            className="relative w-28 flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 cursor-pointer"
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
                            <div className="absolute bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 mt-2 rounded-md shadow-lg z-10 w-64 sm:w-80 max-h-60 overflow-y-auto">
                                {countries.map((country) => (
                                    <div
                                        key={country.code}
                                        className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                        onClick={() =>
                                            handleCountrySelect(country)
                                        }
                                    >
                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="w-6 h-6 mr-2"
                                        />
                                        <span className="mr-2 text-gray-800 dark:text-white">
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
                        placeholder="90 01 12 34"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-black focus:border-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 cursor-pointer text-primary focus:ring-black border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                            J'accepte les Conditions et Politiques
                            d'Utilisation.
                        </span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none"
                >
                    Créer un compte gratuitement
                </button>

                <div className="flex items-center gap-2 mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Vous avez déjà un compte ?
                        <a
                            href="/login"
                            className="text-primary dark:text-gray-100 hover:underline ml-2"
                        >
                            Se connecter
                        </a>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Ou connectez-vous avec
                    </p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <button
                            type="button"
                            className="flex items-center justify-center w-32 hover:bg-black hover:bg-opacity-25 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
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
                            className="flex items-center justify-center w-32 hover:bg-black hover:bg-opacity-25 px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
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

                <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                    <p>
                        En vous inscrivant, vous acceptez nos{" "}
                        <a
                            href="#"
                            className="text-primary dark:text-gray-100 hover:underline"
                        >
                            conditions générales
                        </a>{" "}
                        et{" "}
                        <a
                            href="#"
                            className="text-primary dark:text-gray-100 hover:underline"
                        >
                            politique de confidentialité
                        </a>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Sign;
