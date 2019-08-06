// import React, {useContext} from 'react'
// import { BookContext } from '../contexts/BookContext';
// import BookDetails from './BookDetails';

// const BookList = () => {
//     const { books } = useContext(BookContext)
//     return books.length ? (
//         <div className = "book-list">
//             <ul>
//                 { books.map(book => {
//                     return (
//                         <BookDetails book = {book} key = {book.id} /> 
//                         )
//                     }
//                 )}
//             </ul>
//         </div>
//     ) : (
//         <div className = "empty">No books to read</div>
//     )
// }

// export default BookList


import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import BookForm from './BookForm';
// import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext)
    const { removeBook } = useContext(BookContext)
    return <> {books.length ? (
        <div className="book-list">
            <ul>
                {/* { books.map(book => {
                    return (
                        <li onClick = {() => removeBook(book.id)}>
                        id: {book.id}
                        <div className = "title"> Title: {book.title}</div>
                        <div className = "author"> Author: {book.author}</div>
                        
                        <hr/>
                    </li>  
                        )
                    }
                )} */}
                {books.map(book =>
                    <BookDetails book={book} />
                )}
            </ul>

        </div>
    ) : (
            <div className="empty">No books to read</div>
        )
    }
        <BookForm />
    </>
}

export default BookList
