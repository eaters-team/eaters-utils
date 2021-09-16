#Icon-sprite component

```javascript
const router = new VueRouter({
    mode: 'history',
    routes: require('./router/routing.js').default,
})
import { VueIcons } from 'eaters-utils'
Vue.use(VueIcons, {'router': router, 'spriteUrl': require('./assets/svg/sprite.svg')});
```
