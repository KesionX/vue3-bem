declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    bem: (
      e?: string | null,
      m?: string | string[] | { [key in string]: boolean }
    ) => string[];
  }
}
