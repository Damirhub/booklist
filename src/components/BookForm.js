import React, { useState, useContext, useRef } from 'react'
import uuid from 'uuid/v1'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext)

    const [bookInput, setBookInput] = useState({ title: '', author: '' })

    const handleSubmit = e => {
        e.preventDefault()
        addBook(bookInput);
        setBookInput({ title: '', author: '' })
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Book Title" value={bookInput.title} 
                    onChange={(e) => setBookInput({ ...bookInput, title: e.target.value })} />
                <input type="text" placeholder="Book Author" value={bookInput.author}
                    onChange={(e) => setBookInput({ ...bookInput, author: e.target.value })} />

                {/* <button disabled={!bookInput.author} type="submit"> SUBMIT </button> */}
                <input disabled={!bookInput.author} type="submit"/>
            </form>
        </div>
    )
}

export default BookForm
