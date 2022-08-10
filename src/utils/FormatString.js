import PropTypes from 'prop-types';

const FormatString = (props) => {
    const fs = () => {
        var MR = props.book.maturityRating;
        MR = MR.toLowerCase();
        MR = MR.replaceAll('_', " ");
        MR = MR.replaceAll(MR.charAt(0), MR.charAt(0).toUpperCase());
        return MR;
    }

    return (
        <td>{fs()}</td>
    );
}

FormatString.propTypes = {
    book: PropTypes.object.isRequired
}

export default FormatString;