import React, { useState, createContext, useReducer, useEffect } from 'react'
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
    const [books, dispatch] = useReducer(bookReducer, initialState,
        () => {
            const localData = localStorage.getItem('books')
            return localData ? JSON.parse(localData) : []
        }
    )

    console.log(books)
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])


    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
