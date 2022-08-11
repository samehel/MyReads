import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import * as BooksAPI from './BooksAPI'

const HomePage = () => {

    const [booksOnShelf, setBooksOnShelf] = useState([])

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            const getBooks = async () => {
                const res = await BooksAPI.getAll();
                setBooksOnShelf(res);
            }
            getBooks();
        }
        return () => {
            mounted = false;
        }
    }, [])

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                      booksOnShelf.map((book) => {
                        if(book.shelf === "currentlyReading") {
                          return (
                              <Books 
                                  book={book}
                                  key={book.id}
                                  selectedVal={book.shelf}
                                  originalBooks={booksOnShelf}
                                  setOriginalBooks={setBooksOnShelf}
                              />
                          );
                        }
                      })
                    }
                </ol>
            </div>
              </div>
              {/* WANT TO READ */}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                      booksOnShelf.map((book) => {
                        if(book.shelf === "wantToRead") {
                          return (
                              <Books 
                                  book={book}
                                  key={book.id}
                                  selectedVal={book.shelf}
                                  originalBooks={booksOnShelf}
                                  setOriginalBooks={setBooksOnShelf}
                              />
                          );
                        }
                      })
                    }
                </ol>
              </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <ol className="books-grid">
                    {
                      booksOnShelf.map((book) => {
                        if(book.shelf === "read") {
                          return (
                              <Books 
                                  book={book}
                                  key={book.id}
                                  selectedVal={book.shelf}
                                  originalBooks={booksOnShelf}
                                  setOriginalBooks={setBooksOnShelf}
                              />
                          );
                        }
                      })
                    }
                </ol>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      );
}

export default HomePage;