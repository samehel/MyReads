import PropTypes from 'prop-types';

const FormatString = (props) => {
    const fs = () => {
        var MR = props.mRating;
        MR = MR.toLowerCase();
        MR = MR.replaceAll('_', " ");
        MR = MR.replaceAll(MR.charAt(0), MR.charAt(0).toUpperCase());
        return MR;
    }

    return (
        fs()
    );
}

FormatString.propTypes = {
    mRating: PropTypes.string.isRequired
}

export default FormatString;