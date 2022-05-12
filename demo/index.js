const useBem = require('vue3-bem');
const bem = useBem('tip');
console.log(bem('container'));
console.log(bem('container', 'selected'));
console.log(bem('container', ['selected', 'light']));
console.log(bem('header'));
console.log(bem(null, 'selected'));
