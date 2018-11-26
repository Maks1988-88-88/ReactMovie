import React from "react";
import v4 from "uuid/v4";
import PropTypes from "prop-types";
import posts from "../../posts";
import "./style.css";

class MovieCardCollection extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="MovieList">{children}</div>;
  }
}

export default MovieCardCollection;
