# vue3-bem
Simple implementation of BEM in Vue 3.x


```ts
interface BemItem {
  b?: string;
  e?: string;
  m?: string | string[] | {[key in string]: boolean};
}
```

1. 用法一
```html
<div :class="bem('container')">
    <div :class="bem("wrap")"></div>
</div>
```
```less
.container {
    &__wrap {

    }
}
```

2. 用法二
```html
<div :class="bem('container')">
    <div :class="bem({
        m: ["selected", "highlighted"]
    })"></div>
</div>
```
```ts
<script>
import useBem from "./useBem"
const bem = useBem();
</script>
```
```less
.container {
    &--selected {

    }
    &--highlighted {

    }
}
```


2. 用法三
```html
<div :class="bem('container')">
    <div :class="bem({
        e: "item",
        m: ["selected", "highlighted"]
    })"></div>
</div>
```
```ts
<script>
import useBem from "./useBem"
const bem = useBem();
</script>
```
```less
.container {
    &__item--selected {

    }
    &__item--highlighted {

    }
}
```