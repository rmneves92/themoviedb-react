import { css } from "@emotion/react";

export const Container = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;

  h2 {
    font-weight: 700;
  }
`;

export const PosterContainer = css`
  height: 100%;
`;

export const Poster = css``;

export const MovieDetails = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 36px;

  > * {
    margin-bottom: 20px;
  }
`;

export const MovieTitle = css`
  font-size: 36px;
`;

export const Tagline = css`
  font-size: 18px;
  font-style: italic;
`;

export const MovieOverview = css`
  font-size: 16px;
  line-height: 1.2;
`;

export const TagGenre = css`
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 8px;
  margin-top: 8px;
`;

export const Score = css`
  display: flex;
  align-items: center;

  small {
    font-size: 12px;
  }

  > * {
    margin-right: 8px;
    font-weight: 500;
  }
`;

export const ReleaseDate = css`
  > * {
    display: inline;
  }
`;

export const BackButton = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  align-self: flex-start;
  margin-right: 24px;
`;

export const TagContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
