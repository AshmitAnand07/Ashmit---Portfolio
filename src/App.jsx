import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Background from "./components/common/Background";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Background />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
