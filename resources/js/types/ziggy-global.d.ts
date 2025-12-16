declare function route(name: string, params?: any, absolute?: boolean): string;

import 'vue';
import type { Config as ZiggyConfig } from 'ziggy-js';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        route: typeof route;
        Ziggy: ZiggyConfig;
    }
}
