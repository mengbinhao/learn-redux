import { CHANGE_VAL, ADD_ITEM, DELETE_ITEM, GET_ITEM, GET_ITEM_SAGA } from './actionTypes'
import axios from 'axios'

export const changeValAction = value => ({
  type: CHANGE_VAL,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = index => ({
  type: DELETE_ITEM,
  value: index
})

export const getItemsAction = data => ({
  type: GET_ITEM,
  value: data
})

export const getAsyncItemsAction = () => {
  return (dispatch) => {
    // http://v.juhe.cn/toutiao/index?key=321a6d85d63e1f55bf7f059417beb629
    // http://api.avatardata.cn/TouTiao/Query?key=e96b23a852f34c8489397cd05f919c8d&type=top
    axios.get(`https://bird.ioliu.cn/v1/?url=http://api.avatardata.cn/TouTiao/Query?key=e96b23a852f34c8489397cd05f919c8d&type=top`)
      .then(res => {
        let tmp = res.data.result.data
        if (tmp.length > 10) tmp.length = 10
        const action = getItemsAction(tmp)
        dispatch(action)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const getAsyncItemsSageAction = () => ({
  type: GET_ITEM_SAGA
})


