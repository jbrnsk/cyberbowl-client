/* eslint-disable import/no-duplicates */
declare interface Window {
  // extend the window
}

// with vite-plugin-md, markdowns can be treated as Vue components
declare module '*.md' {
  import { ComponentOptions } from 'vue';

  const component: ComponentOptions;
  export default component;
}

declare module '@canvas-lib';
declare module 'path';
declare module 'url';
