import React from "react";
import v4 from "uuid/v4";
import "./style.css";
import PropTypes from "prop-types";

class MovieCard extends React.Component {
  render() {
    const { tittle, descr, rating, chipsList } = this.props;
    return <div className="MovieCard">
        <button className="MovieCard__btn MovieCard__btn--del">
          delete
        </button>
        <div>
          <h2 className="MovieInfo__title">{tittle}</h2>
          <p className="MovieInfo__descr">{descr} </p>
          <p className="MovieInfo__rating">Rating:{rating}</p>
          <ul className="ChipsList">
            {chipsList.map(lists => (
              <li className="ChipsList__item" key={v4()}>
                {lists}
              </li>
            ))}
          </ul>
        </div>
      </div>;
  }
}

MovieCard.propTypes = {
  tittle: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  chipsList: PropTypes.array.isRequired
};


export default MovieCard;
