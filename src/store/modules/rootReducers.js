import { combineReducers } from 'redux'

import search from './Search/searchReducer'
import products from './Products/productsReducer'
import mobile from './Mobile/MobileReducer'
import cart from './Cart/CartReducer'

export default combineReducers({
    search,
    products,
    mobile,
    cart
})