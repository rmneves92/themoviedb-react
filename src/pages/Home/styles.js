import { css } from "@emotion/react";

export const Container = css`
  display: flex;
  flex-wrap: wrap;
  color: #fff;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const MoviesContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 3;
`;

export const MoviesCards = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 45px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
