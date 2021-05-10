import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import * as styles from "./styles";
import moment from "moment";
import { Star } from "react-feather";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animations";

const Details = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    loadMovieDetails(id);
  }, [id]);

  const loadMovieDetails = (id) => {
    try {
      api
        .get(
          `movie/${id}?language=pt-BR&append_to_response=images&include_image_language=en,null`
        )
        .then((res) => setMovie(res.data))
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.section
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
      css={styles.Container}
    >
      {!movie.title ? (
        <span>Carregando...</span>
      ) : (
        <>
          <div css={styles.PosterContainer}>
            {movie.poster_path && (
              <img
                src={
                  movie.poster_path &&
                  `http://image.tmdb.org/t/p/w300${movie.poster_path}`
                }
                alt={movie.title}
                css={styles.Poster}
              ></img>
            )}
          </div>

          <div css={styles.MovieDetails}>
            <h2 data-testid="movie-title" css={styles.MovieTitle}>
              {movie.title}
            </h2>
            <span css={styles.Tagline}>{movie.tagline}</span>

            <div css={styles.Score}>
              <Star color="gold" />
              <span>
                {movie.vote_average}{" "}
                <small>/10 ({movie.vote_count} votos) </small>
              </span>
            </div>

            <div css={styles.TagContainer}>
              {movie.genres &&
                movie.genres.map((genre, index) => (
                  <span key={index} css={styles.TagGenre}>
                    {genre.name}
                  </span>
                ))}
            </div>

            <p css={styles.MovieOverview}>{movie.overview}</p>

            <div css={styles.ReleaseDate}>
              <h2>Data de lançamento: </h2>
              <span>
                {moment(movie.release_date, "YYYY-MM-DD").format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Details;
