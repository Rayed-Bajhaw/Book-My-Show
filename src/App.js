import "./App.css";
import { Routes, Route } from "react-router-dom";

// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/movie/:id" />
      <Route path="/plays" />
    </Routes>
  );
}

export default App;
