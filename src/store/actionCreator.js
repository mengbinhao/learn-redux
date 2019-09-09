import { CHANGE_VAL, ADD_ITEM, DELETE_ITEM } from './actionTypes'

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
