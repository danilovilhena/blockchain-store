import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";

const App = () => (<>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</>)

export default App;
