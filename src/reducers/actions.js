import * as ACTION_TYPES from './actionTypes'

export const addBook = (title, author) => ({
    type: ACTION_TYPES.ADD_BOOK,
    payload: { title, author }
})
