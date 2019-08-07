import React, { useState, createContext, useReducer } from 'react'
import uuid from 'uuid/v1'
import { bookReducer, initialState } from '../reducers/bookReducer';

export const BookContext = createContext()

const BookContextProvider = (props) => {

    // const [books, setBooks] = useState([
    //     { title: 'name of the wind', author: 'patrick rothfuss', id: uuid() },
    //     { title: 'the final empire', author: 'brandon sanderson', id: uuid() },
    //     { title: 'book 3 test', author: 'pera peric', id: uuid() },
    //     { title: 'book 4 test', author: 'mele meiseil', id: 4 },
    // ])
    const [booksER, dispatch] = useReducer(bookReducer, initialState)

    // const addBook = (title, author) => {
    //     setBooks([...books, { title: title, author: author, id: uuid() }])
    // }

    // const removeBook = (receivedId) => {
    //     setBooks(books.filter(Q => Q.id !== receivedId))
    // }

    return (
        <BookContext.Provider value={{ booksER, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
