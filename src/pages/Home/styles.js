import { css } from "@emotion/react";

export const Container = css`
  display: flex;
  color: #fff;
`;

export const MoviesContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 82px;

  flex: 3;
`;
