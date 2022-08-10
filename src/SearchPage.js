import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Books from "./Books";

const SearchPage = () => {

    const [bookCollection, setBookCollection] = useState([]);
    const [originalBooks, setOriginalBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const updateSearchQuery = (sq) => {
        setSearchQuery(sq);
        updateBookDisplay(sq);
    }

    const updateBookDisplay = (searchQuery) => {
        if(searchQuery !== "") {
            BooksAPI.search(searchQuery.trim()).then((b) => {
                b.length > 0 ? setBookCollection(b) : setBookCollection([])
            })
        } else if (searchQuery === "") {
            setBookCollection(originalBooks);
            clearSearchQuery();
        }
    }

    const clearSearchQuery = () => {
        setSearchQuery("");
    }

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            const getBooks = async () => {
                const res = await BooksAPI.getAll();
                setBookCollection(res);
                setOriginalBooks(res);
            }
            getBooks();
        }
        return () => {
            mounted = false;
        }
    }, [])

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <h2 className="db-current-shelf-title">Current books added to your shelf</h2>
            <ol className="books-grid"></ol>
          </div>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        bookCollection.map((book) => {
                            return (
                                <Books 
                                    book={book}
                                    key={book.id}
                                    selectedVal={book.shelf ? book.shelf : "none"}
                                />
                            );
                        })
                    }
                </ol>
            </div>
        </div>
      );
}

export default SearchPage;