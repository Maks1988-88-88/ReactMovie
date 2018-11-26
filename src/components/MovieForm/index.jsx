import React from "react";
import v4 from "uuid/v4";
import PropTypes from "prop-types";
import "./style.css";


class MovieForm extends React.Component {
  render() {
    const ratingScores = ['1','2','3','4','5','6','7','8','9','10']
    const ratingScore = ratingScores.map(rating => (
      <option value={rating}>{rating}</option>
    ));
    return <form class="MovieForm">
        <label class="MovieForm__label">
          Title
          <input type="text" class="MovieForm__input" />
        </label>
        <label class="MovieForm__label">
          Description
          <textarea class="MovieForm__txtarea" rows="8" />
        </label>
        <label class="MovieForm__label">
          Rating
          <select class="MovieForm__input">
            {ratingScore}
          </select>
        </label>
        <button class="MovieForm__submit" type="submit">
          submit
        </button>
      </form>;
  }
}

// AppBody.prototypes = {
//   headerLogo: PropTypes.string.isRequired
// };

export default MovieForm;
