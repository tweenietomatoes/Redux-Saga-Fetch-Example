import { put, takeEvery, call } from 'redux-saga/effects'

import Api from './Api'

function* fetchPosts() {

    try {
        const result = yield call(Api.fetchPosts)
        yield put({ type: 'FETCH', payload: result.data })
    }
    catch (err) {
        console.log(err)
    }
}

export function* watchFetchPosts() {
    yield takeEvery('FETCH_POSTS', fetchPosts);
}
