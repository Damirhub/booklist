import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';

function App() {
  return (
    <BookContextProvider>
      <Navbar/>
      <BookList/>
    </BookContextProvider>
  );
}

export default App;
