import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FormatString from "./utils/FormatString";
import GenerateRating from "./utils/GenerateRating";
import ISO2LanguageConversion from "./utils/ISO2LanguageConversion";

import * as BooksAPI from './BooksAPI'
import Books from "./Books";

const SearchPage = (props) => {

    const [bookCollection, setBookCollection] = useState([]);
    const [originalBooks, setOriginalBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const updateSearchQuery = (sq) => {
        setSearchQuery(sq);
        updateBookDisplay(sq);
    }

    const updateBookDisplay = (searchQuery) => {
        if(searchQuery !== "") {
            BooksAPI.search(searchQuery.trim(), 10).then((b) => {
                b.length > 0 ? setBookCollection(b) : setBookCollection([])
            })
        } else if (searchQuery === "") {
            clearSearchQuery();
            setBookCollection(originalBooks);
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