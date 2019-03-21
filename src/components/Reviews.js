import React, { Component } from "react";
import PropTypes from "prop-types";

class Reviews extends Component {
  constructor(props) {
    super(props);
    console.log(props.product.reviewsArr);

    this.state = {
      showReviews: false,
      product: props.product
    };
  }

  toggleReviews = () => {
    this.setState({ showReviews: !this.state.showReviews });
  };

  render() {
    if (this.state.showReviews) {
      return (
        <div>
          <button onClick={this.toggleReviews}>Toggle Here</button>
          {this.state.product.reviewsArr.map((reviews, index) => {
            return (
              <div key={index}>
                {reviews.description},{reviews.rating}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleReviews}>Toggle Here</button>
        </div>
      );
    }
  }
}

//take a product from props, how do I code that?
Reviews.propTypes = {
  products: PropTypes.object
};

export default Reviews;
