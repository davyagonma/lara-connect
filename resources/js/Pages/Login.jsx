import React, { useState } from "react";
import google from "../../../public/assets/logo/google.png";
import facebook from "../../../public/assets/logo/facebook.png";
import Logo from "../components/Logo";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-72 sm:max-w-md mx-auto my-10 sm:my-0 bg-white shadow-lg rounded-lg p-6 w-full">
            <div className="flex justify-center">
                <Logo />
            </div>

            <h2 className="text-lg font-bold mb-4 text-center">
                Connectez-vous
            </h2>

            <form>
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

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none"
                >
                    Se connecter
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-2 justify-between mt-4">
                    <a
                        href="#"
                        className="text-sm text-primary hover:underline"
                    >
                        Mot de passe oublié ?
                    </a>
                    <p className="text-sm text-gray-600">
                        Pas encore de compte ?{" "}
                        <a
                            href="/signup"
                            className="text-primary hover:underline"
                        >
                            Créez-en un
                        </a>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Ou connectez-vous avec
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-4 sm:gap-0 sm:space-x-4 mt-2">
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
                    En vous connectant, vous acceptez les{" "}
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

export default Login;
