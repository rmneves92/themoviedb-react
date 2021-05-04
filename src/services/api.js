import ky from "ky";

const headers = {
  "Content-Type": "application/json",
};

const api = ky.create({
  prefixUrl: "https://api.themoviedb.org/3/",
  headers,
});

export default api;

// Chave da API (v3 auth): b4bf9244e61c43cbd2bcbbcb2f7acafd

// Exemplo de Requisição de API: https://api.themoviedb.org/3/movie/550?api_key=b4bf9244e61c43cbd2bcbbcb2f7acafd

// Token de Leitura da API (v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGJmOTI0NGU2MWM0M2NiZDJiY2JiY2IyZjdhY2FmZCIsInN1YiI6IjYwODhjNjRiNTRhMDk4MDAyOTRkM2Q5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p01GY2DscR0KbM0IgK180tQPb3duwB8dxzpAXpn_qpw
