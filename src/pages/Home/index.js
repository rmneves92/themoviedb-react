import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import * as styles from "./styles";
import { useFilter } from "../../context/movieContext";
import MovieCard from "../../components/MovieCard";
import Sidebar from "../../components/Sidebar";

const apiKey = "b4bf9244e61c43cbd2bcbbcb2f7acafd";

const Home = (props) => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { filters, setFilters } = useFilter();

  useEffect(() => {
    loadMovies();
    loadGenres();
  }, []);

  useEffect(() => {
    loadMovies();
  }, [filters]);

  const loadMovies = async () => {
    try {
      const response = await api.get(
        `discover/movie?api_key=${apiKey}&language=pt-BR`
      );
      if (!response.ok) throw new Error(`Fetch error: ${response.statusText}`);

      const json = await response.json();

      const filtersId = filters.map((filter) => filter.id);
      if (filters.length > 0) {
        setMovies(
          json.results.filter((movie) =>
            movie.genre_ids.some((id) => filtersId.includes(id))
          )
        );
      } else {
        setMovies(json.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loadGenres = async () => {
    try {
      const response = await api.get(
        `genre/movie/list?api_key=${apiKey}&language=pt-BR`
      );
      if (!response.ok) throw new Error(`Fetch error: ${response.statusText}`);

      const json = await response.json();

      setGenres(json.genres);
    } catch (err) {
      console.log(err);
    }
  };

  const filterByGenre = (genre) => () => {
    console.log("filterByGenre", genre);
    if (filters.includes(genre)) {
      setFilters(filters.filter((f) => f !== genre));
    } else {
      setFilters([...filters, genre]);
    }
  };

  const openDetails = (id) => {
    history.push(`/details/${id}`);
  };

  console.log({ genres, movies, filters });

  return (
    <div css={styles.Container}>
      <Sidebar genres={genres} handleClick={filterByGenre} />

      {movies.length === 0 && <span>Carregando...</span>}

      <section css={styles.MoviesContainer}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard open={openDetails} {...movie} key={movie.id} />
          ))}
      </section>
    </div>
  );
};

export default Home;
