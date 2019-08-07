import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';


const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext)
    return (
        <div>
            <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id })}
            >
                <div>id: {book.id}</div>
                <div className="title">Title: {book.title}</div>
                <div className="author">Author: {book.author}</div>
                <hr />
            </li>

        </div>
    )
}


// const BookDetails = ({ book }) => {
//     const { removeBook } = useContext(BookContext)
//     return (
//         <div>
//             <li onClick={() => removeBook(book.id)}>
//                 <div>id: {book.id}</div>
//                 <div className="title">Title: {book.title}</div>
//                 <div className="author">Author: {book.author}</div>
//                 <hr />
//             </li>

//         </div>
//     )
// }

export default BookDetails
