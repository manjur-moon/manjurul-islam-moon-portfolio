/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_DEFAULT_OG_IMAGE?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
