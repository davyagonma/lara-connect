import React, { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import Sidebar from "../components/Sidebar";
import { useDarkMode } from "../context/DarkModeContext";

const EditProfilePage = () => {
    const {darkMode} = useDarkMode()
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        bio: "UI/UX Designer",
    });

    const handleSave = (updatedUser) => {
        setUser(updatedUser);
        alert("Profil mis à jour !");
    };

    return (
        <div
            className={`flex h-screen ${
                darkMode ? "text-white bg-gray-800" : "bg-gray-100"
            }`}
        >
            <Sidebar />
            <div className="p-6 pl-16 sm:pl-32 mx-auto my-0">
                <h1 className="text-2xl text-center  font-bold mb-4">
                    Modifier le profil
                </h1>
                <EditProfileForm user={user} onSave={handleSave} />
            </div>
        </div>
    );
};

export default EditProfilePage;
