import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";
import { useFilter } from "../../context/movieContext";
import { Check, X } from "react-feather";
import { Collapse } from "react-collapse";

const Sidebar = ({ genres, handleClick }) => {
  const { setFilters, filters } = useFilter();
  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsOpened(false);
    }
  }, []);

  const isActive = (genre) =>
    filters.includes(filters.find((el) => el === genre.id));

  return (
    <div css={styles.Container}>
      <h1 css={styles.PageTitle} onClick={() => setIsOpened(!isOpened)}>
        Filmes
      </h1>
      {filters.length > 0 && (
        <span css={styles.ClearFilters} onClick={() => setFilters([])}>
          Limpar filtros <X size="20" />
        </span>
      )}
      <hr></hr>

      {genres.length === 0 && <span>Carregando...</span>}

      <Collapse isOpened={isOpened}>
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
      </Collapse>
    </div>
  );
};

Sidebar.propTypes = {
  genres: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Sidebar;
