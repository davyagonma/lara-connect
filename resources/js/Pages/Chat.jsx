import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import UserProfile from "../components/UserProfile";
import { useDarkMode } from "../context/DarkModeContext";

const Chat = () => {
    const [activeChat, setActiveChat] = useState("Jonathan");
    const { darkMode } = useDarkMode();

    return (
        <div
            className={`flex flex-col lg:flex-row h-screen ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            }`}
        >
            <Sidebar />

            <div className="flex-grow flex flex-col-reverse md:flex-col lg:flex-row ml-16 sm:ml-32">
                <ChatList activeChat={activeChat} setActiveChat={setActiveChat} />
                <ChatWindow activeChat={activeChat} />
                <UserProfile />
            </div>
        </div>
    );
};

export default Chat;
