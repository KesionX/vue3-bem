# vue3-bem

Simple implementation of BEM in Vue 3.x, helps you use the BEM specification more concisely in vue3.

<p align="center">
  <a target="_blank" href="https://github.com/KesionX/vue3-bem">
    <img alt="vue3 bem" src="https://github.com/KesionX/vue3-bem/blob/main/logo-prod-2.png?raw=true">
  </a>
  <div align="center">
    <img src="https://img.shields.io/badge/npm-v1.0.6-red"/>
    <img src="https://img.shields.io/github/issues/KesionX/vue3-bem"/>
    <img src="https://img.shields.io/github/stars/KesionX/vue3-bem"/>
    <img src="https://img.shields.io/github/license/KesionX/vue3-bem"/>
  </div>
</p>

## Installation

`npm i vue3-bem`

## Using

vue3-bem is also very easy to use. As shown below.

```ts
// .vue
import useBem from "vue3-bem";
const bem = useBem("block");
```
```html
<div :class="bem('elem', 'selected')"></div>
```
```less
.block {
  &__elem {
    &--selected {
    }
  }
}
```

## Api

Use `useBem` to set the block.

Use `bem` to configure elements and modfiers to return classes.

```ts
type BemFunction = function (
    e?: string | null,
    m?: string | string[] | { [key in string]: boolean }
) => string[];

function useBem(block: string) => BemFunction;

bem: BemFunction
```

## Tools

If you think it's too much trouble to write import for each component, you can use the plugin `vite-plugin-vue3-bem` so you don't need to write import `vue3-bem`.

Use [vite-plugin-vue3-bem](https://github.com/KesionX/vue3-bem/tree/main/packages/vite-plugin-vue3-bem) can help you remove import.

```js
// .vue
<template>
  <div :class="bem('elem', 'selected')"></div>
</template>

<script lang="ts" bem-block="tip">
// do some thing
</script>

<style lang="less"> 
.tip {
  &__elem {
    &--selected {
    }
  }
}
</style>
```

```ts
// vite.config.js
import ViteVue3Bem from "vite-plugin-vue3-bem";

plugins:[
    ViteVue3Bem()
]
```

Type Declaration
Type declaration is required in typescript to prevent error reporting.

```ts
// *.d.ts
import "vue3-bem";
```

## Example

### Custom block name

```html
<div class="tip">
    <div :class="bem("wrap")"></div>
</div>
```

```ts
<script setup>
import useBem from "./useBem";
const bem = useBem('tip');
</script>
```

```less
.tip {
    &__wrap {
    }
}
```

### Inline modfiers

```html
<div :class="bem('container')">
    <div :class="bem("header")"></div>
    <div :class="bem('item',  ["selected", "highlighted"])"></div>
</div>
```

```ts
<script setup>
import useBem from "./useBem";
const bem = useBem('tip');
</script>
```

```less
.tip {
    &__header {
    }
    &__item {
        &--selected {
        }
        &--highlighted {
        }
    }
}
```

### Conditional modfiers

```html
<div :class="bem('container')">
    <div :class="bem("header")"></div>
    <div :class="bem('item',  {"selected": true, "highlighted": highlighted})"></div>
</div>
```

```ts
<script>
    import useBem from "./useBem";
    const bem = useBem('tip');
    const highlighted = ref(false);
</script>
```

```less
.tip {
    &__header {
    }
    &__item {
        &--selected {
        }
        &--highlighted {
        }
    }
}
```
