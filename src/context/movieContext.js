import React, { useState, createContext, useContext } from "react";

const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [filters, setFilters] = useState([]);

  return (
    <MovieContext.Provider value={{ filters, setFilters }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useFilter = () => {
  const context = useContext(MovieContext);
  const { filters, setFilters } = context;

  return { filters, setFilters };
};

// export const useMovie = () => {
//   const context = useContext(MovieContext);
//   const { user, setUser } = context;

//   return { user, setUser };
// };
