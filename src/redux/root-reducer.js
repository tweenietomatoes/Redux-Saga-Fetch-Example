import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import postsReducer from './posts/posts.reducer'

const persistConfig = {
    key: 'root',
    storage : storageSession,
    whitelist: []
}

const rootReducer = combineReducers({
    posts : postsReducer
})

export default persistReducer(persistConfig, rootReducer)

