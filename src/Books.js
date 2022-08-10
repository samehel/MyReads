import PropTypes from 'prop-types';
import { useState } from 'react';
import noCoverImg from './images/no-cover.png'
import BookInformationPopup from './utils/BookInformationPopup';
import FormatString from "./utils/FormatString";
import GenerateRating from "./utils/GenerateRating";
import ISO2LanguageConversion from "./utils/ISO2LanguageConversion";
import HandleSelected from './HandleSelected';

const Books = (props) => {

    const [toggle, setToggle] = useState(false);

    const togglePopup = () => {
        setToggle(!toggle);
    }

    // const handleDefaultSelectedValue = (value) => {
    //     switch (value) {
    //         case "currentlyReading"
    //     }
    // } 

    const handleCurrentlyReading = (event) => {
        console.log(event.target.value)
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
                        <HandleSelected selectedVal={props.selectedVal}/>
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
    selectedVal: PropTypes.string.isRequired
}

export default Books;