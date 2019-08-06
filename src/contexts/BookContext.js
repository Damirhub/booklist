import React, {createContext, useState} from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    
    const [books, setBooks] = useState([
            {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
            {title: 'the final empire', author: 'brandon sanderson', id: 2},
    ])
    
    const addBook = (title, author) => {
        setBooks(...books, {title: title, author: author})
    }

    const removeBook = (receivedId) => {
        setBooks(books.filter( x => x.id !== receivedId))
    }

    return (
        <BookContext.Provider value = {{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
