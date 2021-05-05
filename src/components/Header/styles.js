import { css } from "@emotion/react";

export const Header = css`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  min-height: 100px;
  background-color: #9f5e64;
  display: flex;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
  z-index: 2;
  color: #fff;
`;

export const Nav = css`
  max-width: 1600px;
  width: 100%;
  padding: 0px 80px;
  display: flex;
  align-items: center;
`;

export const Logo = css`
  font-size: 36px;
  font-weight: 700;
  cursor: pointer;
`;

export const Links = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;

    @media (max-width: 640px) {
      display: none;
    }
  }
`;
