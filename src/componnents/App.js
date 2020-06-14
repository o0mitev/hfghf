import React from 'react';
import '../scss/App.scss';
import BooksList from './BooksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Books Berlin
      </header>
      <main>
        <div className="books-list">
          <BooksList></BooksList>
        </div>
      </main>
      <footer>
        &copy;Berlin 2020 Plamen Mitev
      </footer>
    </div>
  );
}

export default App;
