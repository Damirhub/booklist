import React, { useState, createContext } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { title: 'name of the wind', author: 'patrick rothfuss', id: uuid() },
        { title: 'the final empire', author: 'brandon sanderson', id: uuid() },
        { title: 'book 3 test', author: 'pera peric', id: uuid() },
        { title: 'book 4 test', author: 'mele meiseil', id: 4 },
    ])

    const addBook = (bookInput, e) => {
        console.log("BOOKINPUT", bookInput)
        // setBooks ( ...books, {title : bookInput.title, author: bookInput.author, id: uuid()})
        setBooks([...books, {...bookInput, id: uuid()}])
    }

    const removeBook = (receivedId) => {
        setBooks(books.filter(Q => Q.id !== receivedId))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
