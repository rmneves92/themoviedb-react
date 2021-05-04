import { css } from "@emotion/react";

export const header = css`
  position: fixed;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  min-height: 100px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
  z-index: 2;
`;

export const nav = css`
  max-width: 1600px;
  width: 100%;
  padding: 0px 80px;

  display: flex;
  align-items: center;
`;
