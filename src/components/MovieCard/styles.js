import { css } from "@emotion/react";

export const MovieContainer = css`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease 0s;
    box-shadow: 0 0 2px 2px #fff, 0 0 22px 2px #0ff;
  }
`;

export const MovieImage = css`
  width: 100%;
  max-height: 100%;
  object-fit: cover;

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const MovieInfo = css`
  padding: 24px 10px;
  text-align: center;
  color: #fff;
`;
