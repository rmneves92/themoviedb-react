import { css } from "@emotion/react";

export const Button = css`
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
  background: none;
  border: none;
  font: inherit;
  outline: inherit;
  margin-bottom: 24px;

  &:disabled {
    color: #808080;
  }
`;

export const PaginationContainer = css`
  display: flex;
`;
