import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import SearchResults from "./routes/SearchResults";

const App = () => (<>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<SearchResults />} />
  </Routes>
</>)

export default App;
