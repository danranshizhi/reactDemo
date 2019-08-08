import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import screenReducer from '@redux/reducers/screenReducer'

const enhancers = process.env.NODE_ENV === "development" ? composeWithDevTools(
  applyMiddleware(thunk)
)
  :
  applyMiddleware(thunk);

const rootReducer = combineReducers({
  screen: screenReducer
});

export const store = createStore(rootReducer, enhancers);
// export const persistor = persistStore(store)
