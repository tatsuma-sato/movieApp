import "./App.scss";

import Hero from "./components/Hero/Hero";
import { MovieState } from "./Context/MovieContext";

function App() {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
}

export default App;
