import PropTypes from 'prop-types';

const HandleSelected = (props) => {
    if(props.selectedVal === "currentlyReading") {
        return (
            <div className="book-shelf-changer">
                <select defaultValue={'currentlyReading'}>
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
                <select defaultValue={'wantToRead'}> 
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
                <select defaultValue={'read'}>
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
                <select defaultValue={'none2'}>
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

HandleSelected.propTypes = {
    selectedVal: PropTypes.string.isRequired
}

export default HandleSelected;