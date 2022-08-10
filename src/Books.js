import PropTypes from 'prop-types';

import noCoverImg from './images/no-cover.png'

const Books = (props) => {
    const imageURL = props.book.imageLinks && props.book.imageLinks.smallThumbnail ? props.book.imageLinks.smallThumbnail : noCoverImg

    return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url("${imageURL}")`
                        }}>
                        </div>
                    </div>
                    {/* <label className="book-title">{props.book.title ? props.book.title : "No title available"}</label>
                    <br></br>
                    <label className="book-authors">{props.book.authors.join(', ')}</label> */}
                </div>
            </li>
        );
}

Books.propTypes = {
    book: PropTypes.object.isRequired
}

export default Books;