import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const UserProfile = () => {
    const { darkMode } = useDarkMode();

    return (
        <div
            className={`w-full lg:w-1/4 p-4 border-l ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
            <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-400 mb-4"></div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-sm text-gray-400">UI/UX Designer</p>
                <a
                    href="/edit/profile"
                    className="block bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
                >
                    Modifier mon profil
                </a>
            </div>
        </div>
    );
};

export default UserProfile;
