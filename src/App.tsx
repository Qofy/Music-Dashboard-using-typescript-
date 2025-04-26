import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MiddleContext } from "./context/Middlecontext";
import { Browse } from "./pages/Browse";
import { Favorite } from "./pages/Favorite";
import { Library, Artist, Album, Songs } from "./pages/Library";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MiddleContext />} />
          <Route path="browse" element={<Browse />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="library" element={<Library />}>
            <Route index element={<Artist />} />
            <Route path="artist" element={<Artist />} />
            <Route path="album" element={<Album />} />
            <Route path="songs" element={<Songs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
