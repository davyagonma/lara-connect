import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { DarkModeProvider } from "./context/DarkModeContext";

createInertiaApp({
    title: () => `Lara-Connect`,
    resolve: (name) => import(`./Pages/${name}.jsx`),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <DarkModeProvider>
                <App {...props} />
            </DarkModeProvider>
        );
    },
});
