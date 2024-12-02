import React from "react";
import Sidebar from "../components/Sidebar";
import { useDarkMode } from "../context/DarkModeContext";

const FavoritesPage = () => {
    const { darkMode } = useDarkMode();

    const favorites = [
        {
            id: 1,
            author: "Jane Doe",
            content: "Ceci est une publication que vous avez aimée.",
            image: "https://via.placeholder.com/150", // URL de l'image
        },
        {
            id: 2,
            author: "John Doe",
            content: "Un autre contenu que vous appréciez.",
        },
        {
            id: 3,
            author: "Alice Smith",
            content: "Découvrez cette image incroyable !",
            image: "https://via.placeholder.com/200", // Autre URL d'image
        },
    ];

    return (
        <div
            className={`flex h-screen ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
        >
            <Sidebar />
            <main className="flex-1 p-4 sm:p-6 lg:px-8 ml-16 sm:ml-32">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Vos Favoris
                </h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {favorites.map((favorite) => (
                        <div
                            key={favorite.id}
                            className={`p-4 rounded-lg shadow-lg transition-all ${
                                darkMode
                                    ? "bg-gray-800 hover:bg-gray-700"
                                    : "bg-white hover:bg-gray-200"
                            }`}
                        >
                            <p className="font-semibold">{favorite.author}</p>
                            <p>{favorite.content}</p>
                            {favorite.image && (
                                <img
                                    src={favorite.image}
                                    alt="Publication favorite"
                                    className="w-full h-auto rounded-lg mt-2"
                                />
                            )}
                            <a
                                href="/posts/details"
                                className="text-blue-500 hover:underline mt-4 block"
                            >
                                Lire plus
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FavoritesPage;
