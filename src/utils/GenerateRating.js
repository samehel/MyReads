import PropTypes from 'prop-types';

const GenerateRating = (props) => {
    
    const genRating = () => {
        const bookAvgRating = props.book.averageRating;
        const bookTotalRates = props.book.ratingsCount;
        
        return `This Book has an average rating of ${bookAvgRating} from a total of ${bookTotalRates} ratings`
    }

    return (
        <td>{genRating()}</td>
    );
}

GenerateRating.propTypes = {
    book: PropTypes.object.isRequired
}

export default GenerateRating;