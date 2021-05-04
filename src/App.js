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
        <Header />
        <main>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/details/:id" exact component={Details} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </BrowserRouter>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
