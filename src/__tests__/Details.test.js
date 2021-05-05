import React from "react";
import Details from "../pages/Details";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import mockAxios from "axios";

import MovieProvider from "../context/movieContext";
const apiKey = "b4bf9244e61c43cbd2bcbbcb2f7acafd";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "460465",
  }),
  useRouteMatch: () => ({ url: "/details/460465" }),
}));

const fakeMovie = {
  adult: false,
  backdrop_path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
  genres: [
    { id: 14, name: "Fantasia" },
    { id: 28, name: "Ação" },
    { id: 12, name: "Aventura" },
    { id: 878, name: "Ficção científica" },
    { id: 53, name: "Thriller" },
  ],
  id: 460465,
  original_language: "en",
  original_title: "Mortal Kombat",
  overview:
    "Nova aventura baseada no videogame Mortal Kombat. Na história, um jovem que nunca treinou artes marciais acaba envolvido em um gigantesco torneio de luta envolvendo guerreiros da Terra e lutadores e outras dimensões.",
  popularity: 5088.686,
  poster_path: "/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",

  release_date: "2021-04-07",

  tagline: "",
  title: "Mortal Kombat",
  vote_average: 7.8,
  vote_count: 2042,
};

describe("Details Page", () => {
  it("should display movie details without errors", async () => {
    mockAxios.get.mockImplementation((url) => {
      switch (url) {
        case `movie/460465?api_key=${apiKey}&language=pt-BR&append_to_response=images&include_image_language=en,null`:
          return Promise.resolve({ data: fakeMovie });

        default:
          return Promise.reject(new Error("not found"));
      }
    });

    render(
      <MovieProvider>
        <Details />
      </MovieProvider>
    );

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `movie/460465?api_key=${apiKey}&language=pt-BR&append_to_response=images&include_image_language=en,null`
    );

    await waitFor(() => {
      expect(screen.getByTestId("movie-title")).toHaveTextContent(
        /Mortal Kombat/i
      );
    });
  });
});
