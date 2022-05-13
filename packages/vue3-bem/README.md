# vue3-bem
Simple implementation of BEM in Vue 3.x .

<p align="center">
  <a target="_blank" href="https://github.com/KesionX/vue3-bem">
    <img alt="sponsors" src="https://github.com/KesionX/vue3-bem/blob/main/logo-prod-2.png?raw=true">
  </a>
</p>

## Installation

`npm i vue3-bem`

## Api

```ts
type BemFunction = function (
    e?: string | null,
    m?: string | string[] | { [key in string]: boolean }
) => string[];

useBem: function (block: string) => BemFunction;

bem: BemFunction
```

## Use

```ts
const bem = useBem("block");
```

```html
<div :class="bem('elem', 'selected')"></div>
```

## Build Tools

Use [vite-plugin-vue3-bem](https://github.com/KesionX/vue3-bem/tree/main/packages/vite-plugin-vue3-bem) can help you remove import.
```js
// like it
<script lang="ts" bem-block="block-name">
</script>

// equivalent to
<script lang="ts" bem-block="tip">
import useBem from "./useBem";
const bem = useBem('tip');
</script>
```

```ts
import ViteVue3Bem from "vite-plugin-vue3-bem";

plugins:[
    ViteVue3Bem()
]

```


## Type Declaration

```ts
// env.d.ts
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
