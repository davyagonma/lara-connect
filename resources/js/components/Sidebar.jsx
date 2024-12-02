import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link } from "@inertiajs/react";
import actuality from "../../../public/assets/icons/home.svg";
import message from "../../../public/assets/icons/chat.svg";
import profil from "../../../public/assets/icons/profile.svg";
import favoris from "../../../public/assets/icons/favourite.svg";
import settings from "../../../public/assets/icons/settings.svg";

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState("");

    const links = [
        { name: actuality, path: "/actuality" },
        { name: message, path: "/chat" },
        { name: profil, path: "/profile" },
        { name: favoris, path: "/favorites" },
        { name: settings, path: "/settings" },
    ];

    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);

    const handleChange = (path) => {
        setActiveLink(path);
    };

    return (
        <div className="bg-primary text-white fixed w-16 sm:w-32 h-full flex flex-col items-center gap-6">
            <Logo />

            <nav>
                <ul className="flex flex-col gap-2 justify-center items-center">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                onClick={() => handleChange(link.path)}
                                href={link.path}
                                className="rounded-sm px-8"
                            >
                                <img className={`w-8 sm:w-10 h-8 sm:h-10 ${
                                    activeLink === link.path
                                        ? "bg-white p-2 rounded-full"
                                        : "hover:bg-white hover:p-2 hover:rounded-full"
                                }`} src={link.name} alt="menu icon" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
