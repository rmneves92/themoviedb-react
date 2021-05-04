import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/api";
import { css } from "@emotion/react";

const apiKey = "b4bf9244e61c43cbd2bcbbcb2f7acafd";

const Details = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log("ID: ", id);

    loadMovieDetails(id);
  }, [id]);

  const loadMovieDetails = async (id) => {
    try {
      const response = await api.get(
        `movie/${id}?api_key=${apiKey}&language=pt-BR&append_to_response=images&include_image_language=en,null`
      );
      if (!response.ok) throw new Error(`Fetch error: ${response.statusText}`);

      const json = await response.json();

      console.log(json);

      setMovie(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      {movie.backdrop_path && (
        <img
          src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        ></img>
      )}
      <p>{movie.overview}</p>
    </div>
  );
};

export default Details;
