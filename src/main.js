import {createApp} from 'vue'

import '../public/index.html'
import '../public/Style.scss'
import html from ".././public/index.html"
// import 'vue-loader/template-loader!pug-loader!source.vue?vue&type=template'
// import 'style-loader!vue-loader/style-post-loader!css-loader!sass-loader!vue-loader!source.vue?vue&type=style&index=1&scoped&lang=scss'
// import 'source.vue?vue&type=script'
import Router from './router'
import App from './App.vue'
import Store from './store'
import vueScrollTo from 'vue-scrollto'

createApp(App)
    .use(Router)
    .use(Store)
    .use(vueScrollTo)
    .mount('#app')

