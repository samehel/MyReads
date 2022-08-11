import PropTypes from 'prop-types';
import { useState } from 'react';
import noCoverImg from './images/no-cover.png'
import BookInformationPopup from './utils/BookInformationPopup';
import FormatString from "./utils/FormatString";
import GenerateRating from "./utils/GenerateRating";
import ISO2LanguageConversion from "./utils/ISO2LanguageConversion";
import ShelfManager from './ShelfManager';
import * as BooksAPI from './BooksAPI';

const Books = (props) => {

    const handleShelf = (event) => {
        const shelfName = event.target.value;
        BooksAPI.update(props.book, shelfName);

        if(props.originalBooks.includes(props.book)) {
            const sortedBookArray = props.originalBooks.filter((b) => b.title !== props.book.title);
            props.book.shelf = shelfName;
            props.setOriginalBooks(sortedBookArray.concat(props.book));
        } else if(!props.originalBooks.includes(props.book)) {
            props.setOriginalBooks([...props.originalBooks, props.book]);
        }
    }

    const [toggle, setToggle] = useState(false);

    const togglePopup = () => {
        setToggle(!toggle);
    }

    const imageURL = props.book.imageLinks && props.book.imageLinks.smallThumbnail ? props.book.imageLinks.smallThumbnail : noCoverImg
    const imagePopupURL = props.book.imageLinks && props.book.imageLinks.thumbnail ? props.book.imageLinks.thumbnail : noCoverImg
    return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url("${imageURL}")`
                        }} onClick={togglePopup}>
                        </div>
                        {
                        toggle && <BookInformationPopup
                        content={
                        <>
                            <b className='popup-heading'>{props.book.title}</b>
                            <img className="popup-image-display" src={`${imagePopupURL}`}/>
                            <p className='popup-body'>
                                <b>Title: </b>{props.book.title ? props.book.title : "No title available"}
                                <br/>
                                <b>Subtitle: </b>{props.book.subtitle !== undefined ? props.book.subtitle : "No Subtitle found"}
                                <br/>
                                <b>Author(s): </b>{props.book.authors ? props.book.authors.join(", ") : "No author available"}
                                <br/>
                                <b>ISBN: </b>{props.book.industryIdentifiers[1] ? props.book.industryIdentifiers[1].identifier : props.book.industryIdentifiers[0].identifier || "No ISBN found"}
                                <br/>
                                <b>Language: </b><ISO2LanguageConversion code={props.book.language}/>
                                <br/>
                                <b>Maturity Rating: </b><FormatString mRating={props.book.maturityRating}/>
                                <br/>
                                <b>Rating: </b><GenerateRating avgRating={props.book.averageRating ? props.book.averageRating : 0} totalRatings={props.book.ratingsCount ? props.book.ratingsCount : 0}/>
                            </p>
                            
                        </>
                        }
                        handleClose={togglePopup}
                        />
                        }
                        <ShelfManager 
                            selectedVal={props.selectedVal} 
                            bookObj={props.book}
                            handleShelf={handleShelf}
                        />
                    </div>
                    <label className="book-title">{props.book.title ? props.book.title : "No title available"}</label>
                    <br></br>
                    <label className="book-authors">{props.book.authors ? props.book.authors.join(", ") : "No author available"}</label>
                </div>
            </li>
        );
}

Books.propTypes = {
    book: PropTypes.object.isRequired,
    selectedVal: PropTypes.string.isRequired,
    originalBooks: PropTypes.array.isRequired,
    setOriginalBooks: PropTypes.func.isRequired
}

export default Books;