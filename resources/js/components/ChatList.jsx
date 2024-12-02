import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ChatList = ({ activeChat, setActiveChat }) => {
    const chatUsers = ["Jonathan", "Elizabeth", "Michael"];
    const { darkMode } = useDarkMode();

    return (
        <div
            className={`w-full lg:w-1/4 p-4 border-r ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            }`}
        >
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <div className="space-y-4">
                {chatUsers.map((name) => (
                    <div
                        key={name}
                        className={`p-3 rounded-lg cursor-pointer flex items-center justify-between ${
                            activeChat === name
                                ? "bg-blue-500 text-white"
                                : `${
                                      darkMode
                                          ? "bg-gray-700 hover:bg-gray-600"
                                          : "bg-gray-200 hover:bg-gray-300"
                                  }`
                        }`}
                        onClick={() => setActiveChat(name)}
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                            <div>
                                <p className="font-semibold">{name}</p>
                                <p className="text-sm text-gray-400">Lorem ipsum...</p>
                            </div>
                        </div>
                        <span className="text-xs text-gray-500">10:00 AM</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;
