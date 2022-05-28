import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class Star extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
        console.log('the rating prev:', prevValue)
        console.log('the rating:', nextValue)
        console.log('the name:', name)
    }

    render() {
        const { rating } = this.state;

        return (
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}

