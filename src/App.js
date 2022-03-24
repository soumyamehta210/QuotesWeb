import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AllQuotes from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
// import QuoteDetail from "./pages/QuoteDetail";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner></LoadingSpinner>
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes"></Redirect>
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes></AllQuotes>
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail></QuoteDetail>
            </Route>
            <Route path="/new-quote">
              <NewQuote></NewQuote>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
