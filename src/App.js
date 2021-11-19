import "./App.scss";

import "../src/styles/styles.scss";
import Header from "./components/Header/Header";
import { MovieState } from "./Context/MovieContext";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MovieState>
              <Header />
            </MovieState>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
