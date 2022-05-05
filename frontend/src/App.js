import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";

const App = () => (<>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  <Footer />
</>)

export default App;
