#Icon-sprite component

```javascript
import Icons from './components/icons/icons';
const router = new VueRouter({
    mode: 'history',
    routes: require('./router/routing.js').default,
})
Vue.use(Icons, {'router': router});
```
