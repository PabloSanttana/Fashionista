import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'

import './App.css';
import Header from './components/Header'
import {store,persistor } from './store'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null}  persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes/>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
