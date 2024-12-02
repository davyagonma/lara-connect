import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import Sidebar from "../components/Sidebar";

const Settings = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [language, setLanguage] = useState("fr");

    return (
        <div
            className={`flex h-screen ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            }`}
        >
            <Sidebar />
            <div className="max-w-3xl p-6 pl-16 sm:pl-32 mx-auto my-0">
                <h1 className="text-2xl text-center font-bold mb-6">
                    Paramètres
                </h1>
                <div
                    className={`p-5 rounded-lg shadow space-y-4 ${
                        darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                >
                    <div>
                        <label className="flex items-center space-x-3">
                            <span>Mode sombre</span>
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-lg mb-2">Langue</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className={`border rounded-lg p-2 w-full ${
                                darkMode ? "bg-gray-700 text-white" : ""
                            }`}
                        >
                            <option value="fr">Français</option>
                            <option value="en">Anglais</option>
                            <option value="es">Espagnol</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
