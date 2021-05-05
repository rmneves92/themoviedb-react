import React, { useState, createContext, useContext } from "react";

const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [filters, setFilters] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <MovieContext.Provider value={{ filters, setFilters, page, setPage }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useFilter = () => {
  const context = useContext(MovieContext);
  const { filters, setFilters } = context;

  return { filters, setFilters };
};

export const usePage = () => {
  const context = useContext(MovieContext);
  const { page, setPage } = context;

  return { page, setPage };
};
