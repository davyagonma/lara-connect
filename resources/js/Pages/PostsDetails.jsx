import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useDarkMode } from "../context/DarkModeContext";

const PostsDetails = () => {
    const { darkMode } = useDarkMode();

    return (
        <div
            className={`flex h-screen ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
        >
            <Sidebar />
            <main className="flex-1 p-4 sm:p-6 lg:px-8 pl-20 sm:pl-44 lg:pl-0 sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 max-w-5xl mx-auto">
                <div
                    className={`p-6 rounded-lg shadow-lg transition-all ${
                        darkMode
                            ? "bg-gray-800 hover:bg-gray-700"
                            : "bg-white hover:bg-gray-200"
                    } mb-6`}
                >
                    <h1 className="text-2xl font-semibold text-center mb-4">
                        Post author
                    </h1>
                    <p className="mb-4">post content</p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-0 space-x-4">
                        <button
                            className={`px-4 py-2 rounded-lg text-white transition-colors ${
                                darkMode
                                    ? "bg-red-500 hover:bg-red-400"
                                    : "bg-primary hover:bg-black"
                            }`}
                        >
                            ❤️ J'aime
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg ${
                                darkMode
                                    ? "bg-gray-700 hover:bg-gray-600"
                                    : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                            💬 Commenter (1)
                        </button>
                    </div>
                </div>

                <div
                    className={`p-4 rounded-lg shadow-lg transition-all ${
                        darkMode
                            ? "bg-gray-800 hover:bg-gray-700"
                            : "bg-white hover:bg-gray-200"
                    }`}
                >
                    <h2 className="text-lg font-semibold mb-3">Commentaires</h2>
                    <textarea
                        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                            darkMode
                                ? "bg-gray-700 text-white focus:ring-gray-500"
                                : "bg-gray-100 text-black focus:ring-primary"
                        }`}
                        placeholder="Ajoutez un commentaire..."
                    ></textarea>
                    <button
                        className={`mt-3 px-4 py-2 rounded-lg text-white transition-colors ${
                            darkMode
                                ? "bg-blue-500 hover:bg-blue-400"
                                : "bg-primary hover:bg-black"
                        }`}
                    >
                        Commenter
                    </button>
                    <div className="mt-4 space-y-2">
                        <div
                            className={`p-2 rounded-lg ${
                                darkMode
                                    ? "bg-gray-700 text-white"
                                    : "bg-gray-100 text-black"
                            }`}
                        >
                            Ceci est un commentaire
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PostsDetails;
