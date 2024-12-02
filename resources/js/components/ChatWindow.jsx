import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ChatWindow = ({ activeChat }) => {
    const { darkMode } = useDarkMode();
    const [messages, setMessages] = useState([
        { id: 1, text: "Bonjour !", sender: "Jonathan" },
        { id: 2, text: "Comment ça va ?", sender: "Me" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { id: Date.now(), text: newMessage, sender: "Me" }]);
            setNewMessage("");
        }
    };

    const handleDeleteMessage = (id) => {
        setMessages(messages.filter((message) => message.id !== id));
    };

    return (
        <div
            className={`w-full lg:w-2/4 flex flex-col ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
            <header className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl">{activeChat}</h2>
                <a href="/logout" className="text-blue-500 hover:underline">
                    Déconnexion
                </a>
            </header>

            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${
                            message.sender === "Me"
                                ? "justify-end"
                                : "justify-start space-x-3"
                        }`}
                    >
                        {message.sender !== "Me" && (
                            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                        )}
                        <div
                            className={`p-3 rounded-lg ${
                                message.sender === "Me"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300"
                            }`}
                        >
                            {message.text}
                        </div>
                        {/* Bouton de suppression */}
                        <button
                            onClick={() => handleDeleteMessage(message.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                        >
                            Supprimer
                        </button>
                    </div>
                ))}
            </div>

            <form
                className="p-4 border-t flex-col md:flex-row flex items-center space-x-3"
                onSubmit={handleSendMessage}
            >
                <input
                    type="text"
                    placeholder="Message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-grow p-2 border rounded-lg"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
};

export default ChatWindow;
