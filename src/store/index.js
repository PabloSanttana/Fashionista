import { createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './modules/rootReducers'

const persistConfig = {
    key: 'ProductsDataStorage',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
const persistor = persistStore(store)
export  {store, persistor}