import React from "react";
import Home from "../pages/Home";
// import Sidebar from "../components/Sidebar";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import mockAxios from "axios";

import MovieProvider, { useFilter } from "../context/movieContext";
const apiKey = "b4bf9244e61c43cbd2bcbbcb2f7acafd";

const fakeGenres = [
  { id: 28, name: "Ação" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animação" },
];

const fakeMovies = [
  {
    adult: false,
    backdrop_path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    genre_ids: [14, 28, 12, 878, 53],
    id: 460465,
    original_language: "en",
    original_title: "Mortal Kombat",
    overview:
      "Nova aventura baseada no videogame Mortal Kombat. Na história, um jovem que nunca treinou artes marciais acaba envolvido em um gigantesco torneio de luta envolvendo guerreiros da Terra e lutadores e outras dimensões.",
    popularity: 5088.686,
    poster_path: "/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",
    release_date: "2021-04-07",
    title: "Mortal Kombat",
    video: false,
    vote_average: 7.8,
    vote_count: 2042,
  },
  {
    adult: false,
    backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
    genre_ids: [878, 28, 18],
    id: 399566,
    original_language: "en",
    original_title: "Godzilla vs. Kong",
    overview:
      "Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.",
    popularity: 2704.261,
    poster_path: "/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg",
    release_date: "2021-03-24",
    title: "Godzilla vs. Kong",
    video: false,
    vote_average: 8.2,
    vote_count: 5237,
  },
];

describe("Home Page", () => {
  it("should call axios and return categories and movies without errors", async () => {
    mockAxios.get.mockImplementation((url) => {
      switch (url) {
        case `discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=&page=1`:
          return Promise.resolve({ data: { results: fakeMovies } });
        case `genre/movie/list?api_key=${apiKey}&language=pt-BR`:
          return Promise.resolve({ data: { genres: fakeGenres } });
        default:
          return Promise.reject(new Error("not found"));
      }
    });

    render(
      <MovieProvider>
        <Home />
      </MovieProvider>
    );

    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=&page=1`
    );

    expect(mockAxios.get).toHaveBeenCalledWith(
      `genre/movie/list?api_key=${apiKey}&language=pt-BR`
    );

    await waitFor(() => {
      expect(screen.getAllByTestId("genre-item").length).toEqual(3);
      expect(screen.getAllByTestId("movie-item").length).toEqual(2);
    });
  });
});
