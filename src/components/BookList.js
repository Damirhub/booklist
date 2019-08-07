import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

import BookDetails from './BookDetails';

const BookList = () => {

    const { booksER } = useContext(BookContext)
    return (
        booksER.length ? (
            <div className="book-list">
                <ul>
                    {booksER.map(book => {
                        return <BookDetails book={book} key={book.id} />
                    })
                    }
                </ul>
            </div>
        ) : (
                <div className="empty"> No books to read. Hello free time :D </div>
            )
    )
}

export default BookList
