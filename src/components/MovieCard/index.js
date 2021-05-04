import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const MovieCard = ({ id, title, poster_path, open }) => {
  return (
    <div>
      <div css={styles.MovieContainer} onClick={() => open(id)}>
        <img
          css={styles.MovieImage}
          src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        ></img>
        <div css={styles.MovieInfo}>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
};

export default MovieCard;
