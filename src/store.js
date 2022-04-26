import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        products:[
            {
                id: 1,
                title: 'Red Love Cup',
                img: 'images/products/1.png',
                price: 37.00,
                newPrice: 25.00,
                qty: 0,
            },
            {
                id: 2,
                title: 'Black Tea Cup',
                img: 'images/products/2.png',
                price: 29.00,
                newPrice: 15.00,
                qty: 0,
            },
            {
                id: 3,
                title: 'B&W Essentials Mug',
                img: 'images/products/3.png',
                price: 19.00,
                newPrice: 0,
                qty: 0,
            },
            {
                id: 4,
                title: 'Winter Style Mug',
                img: 'images/products/4.png',
                price: 25.00,
                newPrice: 0,
                qty: 0,
            },
            {
                id: 5,
                title: 'Ceramic Tea',
                img: 'images/products/5.png',
                price: 46.00,
                newPrice: 0,
                qty: 0,
            },
            {
                id: 6,
                title: 'No Handle Bar Cup',
                img: 'images/products/6.png',
                price: 34.00,
                newPrice: 0,
                qty: 0,
            },
            {
                id: 7,
                title: 'Espresso Cup by Mugs.co',
                img: 'images/products/7.png',
                price: 25.00,
                newPrice: 0,
                qty: 0,
            },
            {
                id: 8,
                title: 'Pink Premium Ceramic',
                img: 'images/products/8.png',
                price: 99.00,
                newPrice: 0,
                qty: 0,
            },
            {
                id: 9,
                title: 'Summer Designer Cup',
                img: 'images/products/9.png',
                price: 29.00,
                newPrice: 0,
                qty: 0,
            },
        ],
        cartItems:[],
        fullPrice: 0,
    },
    getters:{
        allProducts(state){
            return state.products
        },
        cartItems(state){
            return state.cartItems
        }
    },
    mutations:{
        ADD_TO_CART(state, item){
            item.totalPrice = 0;
            item.qty = 1;
            state.cartItems = JSON.parse(localStorage.getItem('cart')) || []
            state.cartItems.push(item)
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            item.totalPrice = item.newPrice || item.price
            console.log(state.cartItems)
        },
        CHANGE_DATA_CART_ADD(state, product){
            state.cartItems.forEach(function (item){
                if (product.id === item.id){
                    item.qty++
                    if (item.newPrice > 0){
                        item.totalPrice = item.newPrice * item.qty
                    }
                    else {
                        item.totalPrice = item.price * item.qty
                    }
                }
            })
        },
        CREATE_CART(state){
            state.cartItems = JSON.parse(localStorage.getItem('cart')) || []
        },
        RENDER_CART(state){
            state.fullPrice = 0
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            state.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            state.cartItems.forEach(function (item){
                    state.fullPrice = state.fullPrice + item.totalPrice
            })
            state.products.forEach(function (item){
                if (state.cartItems.length === 0){
                    item.qty = 0
                }
                else {
                    state.cartItems.forEach(function (e){
                        if (e.id === item.id){
                            item.qty = e.qty
                        }
                    })
                }
            })
        },
        CHANGE_DATA_CART_REMOVE(state, product){
            state.cartItems.forEach(function (item){
                if (product.id === item.id){
                    item.qty--
                    if (item.newPrice > 0){
                        item.totalPrice = item.newPrice * item.qty
                    }
                    else {
                        item.totalPrice = item.price * item.qty
                    }
                }
            })
        },
        DELETE_ITEM_IN_CART(state, product){
            state.cartItems.forEach(function (item, index){
                if (product.id === item.id){
                    state.cartItems.splice(index, 1)
                }
            })
            console.log(state.cartItems)
        },
        CLEAR_CART(state){
            state.cartItems = []
        }
    }
})