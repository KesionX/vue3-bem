# vue3-bem vite plugin

Making vue3-bem run in vite.

## Feature

- remove import vue3-bem

## Use
It is only written with 'script setup', set attr `bem-block` as block. 

use it as follow.

setting in vite.config.js.
```js
// vite.config.js
import ViteVue3Bem from "vite-plugin-vue3-bem";

plugins:[
    ViteVue3Bem()
]
```

in SFC
```html
// like it
<template> 
    <div class="tip">
        <div :class="bem('wrap')"></div>
    </div>
</template>

<script lang="ts" bem-block="tip">
// or <script lang="ts" block="tip">
// or <script lang="ts" b="tip">
</script>
```
```js
// equivalent to
<template> 
    <div class="tip">
        <div :class="bem('wrap')"></div>
    </div>
</template>

<script lang="ts" bem-block="tip">
import useBem from "./useBem";
const bem = useBem('tip');
</script>
```
