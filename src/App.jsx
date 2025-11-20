import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Offers from "./pages/Offers";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
