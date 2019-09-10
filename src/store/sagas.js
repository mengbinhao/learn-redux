import axios from 'axios'
import {  GET_ITEM_SAGA } from './actionTypes'
import { getItemsAction } from '../store/actionCreator'
import { put, takeEvery } from 'redux-saga/effects'

function* mySaga() {
  yield takeEvery(GET_ITEM_SAGA, fetchData)
}

function* fetchData() {
  const action  = yield axios.get(`https://bird.ioliu.cn/v1/?url=http://api.avatardata.cn/TouTiao/Query?key=e96b23a852f34c8489397cd05f919c8d&type=top`)
                  .then(res => {
                    let tmp = res.data.result.data
                    if (tmp.length > 10) tmp.length = 10
                    return getItemsAction(tmp)
                  })
                  .catch(err => {
                    console.log(err)
                  })
  yield put(action)
}

export default mySaga