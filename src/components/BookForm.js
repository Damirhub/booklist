import React, { useState, useContext, useRef } from 'react'
import uuid from 'uuid/v1'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext)

    const [bookInput, setBookInput] = useState({ title: '', author: '' })

    // const title = (e) => {
    //     setBookInput({ ...bookInput, title: e.target.value })
    // }

    // const author = (e) => {
    //     setBookInput({ ...bookInput, author: e.target.value })
    // }
    console.log('bookInput', bookInput);


    return (
        <div >
            <form onSubmit={e => {
                e.preventDefault()
                addBook(bookInput, e);
                setBookInput({ title: '', author: '' })
            }} >

                {/* <input type="text" value={bookInput.title} onChange={title} />
                <input type="text" value={bookInput.author} onChange={author} /> */}

                    <input type="text" value={bookInput.title} onChange={(e) => setBookInput({...bookInput, title: e.target.value})} />
                    <input type="text" value={bookInput.author} onChange={(e) => setBookInput({...bookInput, author: e.target.value})} />

                <button disabled={!bookInput.author} type="submit"> SUBMIT </button>

            </form>
        </div>
    )
}

export default BookForm
