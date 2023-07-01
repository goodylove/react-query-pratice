import { useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import HeroesPage from "./components/HeroesPage";
import RQPage from "./components/RQPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
// import RQ2Page from "./components/RQ2Page";
import RQSinglePage from "./components/RQSinglePage";
import DynamicQueries from "./components/dynamicQueries";
import DependentQuery from "./components/DependentQuery";
import PaginatedQueriPage from "./components/PaginatedQueriPage";
import InfiniteQueryPage from "./components/infiniteQueryPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/heroes-page" element={<HeroesPage />} />
        <Route path="/rq-page" element={<RQPage />} />
        <Route
          path="/depend"
          element={<DependentQuery email="goodyc474@gmail" />}
        />

        <Route path="/dynamic" element={<DynamicQueries heroIds={[1, 2]} />} />
        <Route path="/rq-page/:heroId" element={<RQSinglePage />} />
        <Route path="/pagnation" element={<PaginatedQueriPage />} />
        <Route path="/infinite" element={<InfiniteQueryPage />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
