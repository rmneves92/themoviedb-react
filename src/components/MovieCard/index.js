import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animations";

const MovieCard = ({ open, id, backdrop_path, poster_path, title }) => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <div data-testid="movie-item">
        <div css={styles.MovieContainer} onClick={() => open(id)}>
          {(poster_path || backdrop_path) && (
            <img
              css={styles.MovieImage}
              src={`http://image.tmdb.org/t/p/w500${
                poster_path || backdrop_path
              }`}
              alt={title}
            ></img>
          )}
          <div css={styles.MovieInfo}>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
};

export default MovieCard;
