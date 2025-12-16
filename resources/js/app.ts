// resources/js/app.ts
import '../css/app.css';
import './bootstrap';

// Perbaikan Import:
// type Page dan HeadManager dipindah ke @inertiajs/core
import { createInertiaApp, type App as InertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h, type DefineComponent } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

// Import type Page dan PageProps dari @inertiajs/core
import type { PageProps, Page } from '@inertiajs/core';

const appName: string = import.meta.env.VITE_APP_NAME || 'Laravel'; // Sudah beres karena langkah 1

createInertiaApp({
    title: (title: string) => `${title} - ${appName}`,
    resolve: (name: string) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'), // Sudah beres karena langkah 1
        ) as Promise<DefineComponent>,

    // Perbaikan Type Setup:
    // Gunakan 'setup' yang lebih generik dan Type dari Inertia/Core
    // Lo bisa hapus type inline yang terlalu ketat (": { el: Element, App: InertiaApp<PageProps>, ... }")
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue as any)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
