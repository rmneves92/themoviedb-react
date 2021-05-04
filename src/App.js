import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home/";
import Details from "./pages/Details/";
import { GlobalStyle } from "../src/styles/global";
import MovieProvider from "./context/movieContext";
function App() {
  return (
    <>
      <MovieProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/details/:id" exact component={Details} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </main>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
