import BaseIcon from "./BaseIcon";
import IconPage from "./pages/Icons"

export default {
    install (Vue, options) {
        if (typeof options === 'object') {
            if (Object.prototype.hasOwnProperty.call(options, 'spriteUrl')) {
                Vue.component('eat-icon', Vue.extend(BaseIcon).extend({
                    data: function () {
                        return {
                            'spriteUrl': options.spriteUrl
                        }
                    },
                }))
            }
            if (Object.prototype.hasOwnProperty.call(options, 'router')) {
                let router = options.router;
                if (process.env.NODE_ENV === 'development') {
                    router.addRoutes(
                        [
                            {
                                path: '/_icons',
                                component: Vue.extend(IconPage).extend({
                                    data: function () {
                                        return {
                                            'spriteUrl': options.spriteUrl
                                        }
                                    },
                                })
                            }
                        ]
                    )
                }
            }
        }
    }
}
