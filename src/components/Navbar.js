import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {

const { booksER } = useContext(BookContext)
    return (
        <div className = "navbar">
            <h1>Ninja reading list</h1>
            <p> Currently you have {booksER.length} book get through ...</p>
        </div>
    )
}

export default Navbar
