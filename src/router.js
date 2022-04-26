import {createRouter, createWebHashHistory} from "vue-router";

import mainPage from './components/MainPage.vue'
import cartPage from './components/CartPage.vue'

export default createRouter ({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: mainPage,
            alias: '/',
            name:'main'
        },
        {
            path: '/cart',
            component: cartPage,
            name:'cart'
        },
    ],
    mode:'history',
})