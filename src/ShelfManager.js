import PropTypes from 'prop-types';

const ShelfManager = (props) => {

    // const handleShelf = (event) => {
    //     const shelfName = event.target.value;
    //     BooksAPI.update(props.bookObj, shelfName);
    //     props.setOriginalBooks(props.originalBooks);
    // }

    if(props.selectedVal === "currentlyReading") {
        return (
            <div className="book-shelf-changer">
                <select defaultValue={'currentlyReading'} onChange={props.handleShelf}>
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">
                    Currently Reading
                    </option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        );
    } else if (props.selectedVal === "wantToRead") {
        return (
            <div className="book-shelf-changer">
                <select defaultValue={'wantToRead'} onChange={props.handleShelf}> 
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading" >
                    Currently Reading
                    </option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        );
    } else if (props.selectedVal === "read") {
        return (
            <div className="book-shelf-changer">
                <select defaultValue={'read'} onChange={props.handleShelf}>
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading" >
                    Currently Reading
                    </option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        );
    } else {
        return (
            <div className="book-shelf-changer">
                <select defaultValue={'none'} onChange={props.handleShelf}>
                    <option value="none2" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading" >
                    Currently Reading
                    </option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        );
    }
}

ShelfManager.propTypes = {
    selectedVal: PropTypes.string.isRequired,
    bookObj: PropTypes.object.isRequired,
    handleShelf: PropTypes.func.isRequired
}

export default ShelfManager;