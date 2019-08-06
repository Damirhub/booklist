import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext)
    // console.log(books)
    return (
        // books.map( book =>
            <li onClick = {() => removeBook(book.id)}>
                id: {book.id}
                <div className = "title"> Title: {book.title}</div>
                <div className = "author"> Author: {book.author}</div>
                
                <hr/>
            </li>    
        // )
    )
}

export default BookDetails
