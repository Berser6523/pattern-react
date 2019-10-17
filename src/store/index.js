import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import people from './reducers/people'
import rootSaga from './saga'

const sagaMiddleware  = createSagaMiddleware();

const store = createStore(
    combineReducers({
        people
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
