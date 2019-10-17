import React from 'react'

import Route from './routes'

import { Provider } from 'react-redux'
import Store from './store'

export default function App(){
    return (
        <Provider store={Store}>
            <Route />
        </Provider>
    )
}
