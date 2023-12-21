import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Footer } from "./components/Footer";
import { Login } from "./screens/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
