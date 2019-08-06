import React, { useState, useContext, useRef } from 'react'
import uuid from 'uuid/v1'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext)

    const [bookInput, setBookInput] = useState({ title: 'joh', author: 'doe', id: uuid() })

    const changeId = () => {
        setBookInput({ ...bookInput, id: uuid() })
    }

    const title = (e) => {
        setBookInput({ title: e.target.value, author: bookInput.author, id: bookInput.id })
    }

    const author = (e) => {
        setBookInput({ title: bookInput.title, author: e.target.value, id: bookInput.id })
    }
    console.log('bookInput', bookInput);


    return (
        <div >
            <form onSubmit={e => {
                addBook(bookInput, e);
                changeId();
                setBookInput({ title: '', author: '', id: uuid() })
            }} >

                <input type="text" value={bookInput.title} onChange={title} />
                <input type="text" value={bookInput.author} onChange={author} />
                <button disabled={!bookInput.author} type="submit"> SUBMIT </button>


            </form>
        </div>
    )
}

export default BookForm
