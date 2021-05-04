import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";
import { useFilter } from "../../context/movieContext";
import { Check } from "react-feather";

const Sidebar = ({ genres, handleClick }) => {
  const { filters } = useFilter();

  const isActive = (genre) => filters.includes(genre);

  return (
    <div css={styles.Container}>
      <ul>
        {genres.map((genre, index) => (
          <li
            key={index}
            onClick={handleClick(genre)}
            css={isActive(genre) ? styles.Active : null}
          >
            <span>{genre.name}</span>
            {isActive(genre) && <Check size="16" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  genres: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Sidebar;
