import uuid from 'uuid/v1'

import * as ACTION_TYPES from './actionTypes'

export const initialState = [
    { title: 'name of the wind', author: 'patrick rothfuss', id: uuid() },
    { title: 'the final empire', author: 'brandon sanderson', id: uuid() },
    { title: 'book 3 test', author: 'pera peric', id: uuid() },
    { title: 'book 4 test', author: 'mele meiseil', id: 4 },
]

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {

    // case 'ADD_BOOK':
    //     return [...state, {
    //         title: action.title,
    //         author: action.author ,
    //         id: uuid().slice(0, 8)
    //         }
    //     ]

        case ACTION_TYPES.ADD_BOOK:
            return [...state, {
                title: action.payload.title,
                author: action.payload.author ,
                id: uuid().slice(0, 8)
                }
            ]

        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
            

    default:
        return state
    }
}
