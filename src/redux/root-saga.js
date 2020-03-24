import { all } from 'redux-saga/effects'

import { watchFetchPosts } from './posts/posts.saga'

export default function* rootSaga() {
    yield all([
        watchFetchPosts()
    ])
}