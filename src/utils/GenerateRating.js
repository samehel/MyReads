import PropTypes from 'prop-types';

const GenerateRating = (props) => {
    
    const genRating = () => {
        if(typeof props.avgRating === 0 || props.totalRatings === 0)
            return `This book has no ratings`

        const bookAvgRating = props.avgRating;
        const bookTotalRates = props.totalRatings;

        return `This Book has an average rating of ${bookAvgRating} from a total of ${bookTotalRates} ratings`
    }

    return (
        genRating()
    );
}

GenerateRating.propTypes = {
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired
}

export default GenerateRating;