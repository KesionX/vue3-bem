# vue3-bem
Simple implementation of BEM in Vue 3.x

## Installation
`npm i vue3-bem`

## API
```ts
useBem: function (block: string) => bem;

bem: function (
    e?: string | null,
    m?: string | string[] | { [key in string]: boolean }
) => string[];
```

## Use
```ts
const bem = useBem('block');
```

```html
<div :class="bem('elem', 'selected')"></div>
```

## Example

### Custom block name:

```html
<div :class="bem('tip')">
    <div :class="bem("wrap")"></div>
</div>
```
```ts
<script>
import useBem from "./useBem"
const bem = useBem('tip');
</script>
```
```less
.tip {
    &__wrap {

    }
}
```

### Inline modfiers:

```html
<div :class="bem('container')">
    <div :class="bem("header")"></div>
    <div :class="bem('item',  ["selected", "highlighted"])"></div>
</div>
```
```ts
<script>
import useBem from "./useBem"
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

### Conditional modfiers:

```html
<div :class="bem('container')">
    <div :class="bem("header")"></div>
    <div :class="bem('item',  {"selected": true, "highlighted": highlighted})"></div>
</div>
```
```ts
<script>
import useBem from "./useBem"
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