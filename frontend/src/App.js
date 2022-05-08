import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./routes/Admin";
import Home from "./routes/Home";
import SearchResults from "./routes/SearchResults";

const App = () => (<>
  {!document.location.pathname.startsWith('/admin') && <Header />}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<SearchResults />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
</>)

export default App;
