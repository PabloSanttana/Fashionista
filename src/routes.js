import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'

export default function Routes (){
    return(
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/product/:name' exact component={ProductDetail}/>
                <Route path='/gp/cart' exact component={CartPage}/>
            </Switch>
    )
}