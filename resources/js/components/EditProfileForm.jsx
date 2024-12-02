import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const EditProfileForm = ({ user, onSave }) => {
    const { darkMode } = useDarkMode();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [bio, setBio] = useState(user.bio || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = { name, email, bio };
        onSave(updatedUser);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`${
                darkMode ? "text-white bg-gray-800" : "text-black bg-white"
            } flex flex-col gap-4 p-6 rounded-lg shadow-md`}
        >
            <label className="flex flex-col">
                Nom :
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded"
                />
            </label>
            <label className="flex flex-col">
                Email :
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded"
                />
            </label>
            <label className="flex flex-col">
                Bio :
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="border p-2 rounded"
                />
            </label>
            <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded"
            >
                Sauvegarder
            </button>
        </form>
    );
};

export default EditProfileForm;
