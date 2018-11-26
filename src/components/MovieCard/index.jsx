import React from "react";
import v4 from "uuid/v4";
import PropTypes from "prop-types";
import "./style.css";

class MovieCard extends React.Component {
  render() {
    const {tittle,descr,rating,chipsList} = this.props;
   return (
      <div className="MovieCard">
        <button className="MovieCard__btn MovieCard__btn--del">delete</button>
        <div>
          <h2 className="MovieInfo__title">{tittle}</h2>
          <p className="MovieInfo__descr">{descr} </p>
          <p className="MovieInfo__rating">Rating:{rating}</p>
          <ul className="ChipsList">
            {chipsList.map(lists => (
              <li className="ChipsList__item">{lists}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieCard;
