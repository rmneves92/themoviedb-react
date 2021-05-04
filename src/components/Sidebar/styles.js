import { css } from "@emotion/react";

export const Container = css`
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 600px;
  color: #fff;
  background-color: #1f2b3f;
  flex: 1;
  height: 100%;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Active = css`
  background-color: #9f5e64;
`;

export const PageTitle = css`
  font-size: 36px;
  font-weight: 500;
  padding: 18px 12px;
`;

export const ClearFilters = css`
  font-style: italic;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px 12px;
`;
