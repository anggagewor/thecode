// resources/js/types/vite-env.d.ts
/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
    glob: (pattern: string) => Record<string, () => Promise<any>>;
}
