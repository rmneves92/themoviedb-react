import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import * as styles from "./styles";
import { useFilter, usePage } from "../../context/movieContext";
import MovieCard from "../../components/MovieCard";
import Sidebar from "../../components/Sidebar";
import Pagination from "../../components/Pagination";

const Home = (props) => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { filters, setFilters } = useFilter();
  const { page, setPage } = usePage();

  useEffect(() => {
    loadGenres();
  }, []);

  useEffect(() => {
    loadMovies();
  }, [filters, page]);

  const loadMovies = () => {
    try {
      api
        .get(
          `discover/movie?language=pt-BR&with_genres=${filters.toString()}&page=${page}`
        )
        .then((res) => setMovies(res.data.results))
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const loadGenres = () => {
    try {
      api
        .get(`genre/movie/list?language=pt-BR`)
        .then((res) => setGenres(res.data.genres))
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const filterByGenre = (id) => () => {
    if (filters.find((f) => f === id)) {
      setFilters(filters.filter((f) => f !== id));
    } else {
      setFilters([...filters, id]);
    }
  };

  const openDetails = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <>
      <div css={styles.Container}>
        <Sidebar genres={genres} handleClick={filterByGenre} />

        <div css={styles.MoviesContainer}>
          {movies.length >= 20 && (
            <Pagination changePage={setPage} page={page} />
          )}
          <section css={styles.MoviesCards}>
            {movies.length > 0 &&
              movies.map((movie) => (
                <MovieCard open={openDetails} {...movie} key={movie.id} />
              ))}
          </section>

          {movies.length >= 20 && (
            <Pagination changePage={setPage} page={page} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
