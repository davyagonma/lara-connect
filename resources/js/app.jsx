import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';


createInertiaApp({
    title: () => `TOTC`,
    resolve: (name) => import(`./Pages/${name}.jsx`),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});
