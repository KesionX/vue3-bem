import "@vue/runtime-core";

// @ts-ignore
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    bem: (
      e?: string | null,
      m?: string | string[] | { [key in string]: boolean }
    ) => string[];
  }
}
