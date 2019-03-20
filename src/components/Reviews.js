import React, { Component } from "react";
import PropTypes from "prop-types";
import State from "../state";

class Reviews extends Component {
  constructor(props) {
    super(props)
    render() {
      return <div>{props.product.reviews.map(reviews, i)}</div>;
    }
  }
}

//take a product from props, how do I code that?
Reviews.propTypes = {
  products: PropTypes.object,
  categories: PropTypes.object
};

export default Reviews;
