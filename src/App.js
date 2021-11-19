import "./App.scss";

import styles from "../src/styles/styles.scss";
import Hero from "./components/Header/Header";
import { MovieState } from "./Context/MovieContext";

function App() {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
}

export default App;
