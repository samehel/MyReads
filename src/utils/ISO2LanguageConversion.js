import PropTypes from 'prop-types';

const ISO2LanguageConversion = (props) => {
    const convert = () => {
        switch(props.book.language.toLowerCase()) {
            case "ar":
                return "Arabic";
                break;
            case "en":
                return "English";
                break;
            case "de":
                return "German";
                break;
            case "fr":
                return "French";
                break;
            case "es":
                return "Spanish";
                break;
            default:
                return "Unavailable"
        }
    }

    return (
        <td>{convert()}</td>
    );
}

ISO2LanguageConversion.propTypes = {
    book: PropTypes.object.isRequired
}

export default ISO2LanguageConversion;