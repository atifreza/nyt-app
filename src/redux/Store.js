import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from "./reducers/RootReducer";
import storage from 'redux-persist/lib/storage';
import tokenRefreshMiddleware from "../middleware/tokenRefreshMiddleware";

const persistConfig = {
  key: 'persist-key',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(tokenRefreshMiddleware, thunk))
const persistor = persistStore(store)

export default store
export { persistor }