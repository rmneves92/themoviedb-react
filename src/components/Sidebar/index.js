import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";
import { useFilter } from "../../context/movieContext";
import { Check, X } from "react-feather";

const Sidebar = ({ genres, handleClick }) => {
  const { setFilters, filters } = useFilter();

  const isActive = (genre) =>
    filters.includes(filters.find((el) => el === genre.id));

  return (
    <div css={styles.Container}>
      <h1 css={styles.PageTitle}>Filmes</h1>
      {filters.length > 0 && (
        <span css={styles.ClearFilters} onClick={() => setFilters([])}>
          Limpar filtros <X size="20" />
        </span>
      )}
      <hr></hr>

      {genres.length === 0 && <span>Carregando...</span>}
      <ul>
        {genres.map((genre, index) => {
          return (
            <li
              data-testid="genre-item"
              key={index}
              onClick={handleClick(genre.id)}
              css={isActive(genre) ? styles.Active : null}
            >
              <span>{genre.name}</span>
              {isActive(genre) && <Check size="16" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  genres: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Sidebar;
