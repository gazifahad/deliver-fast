import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Footer } from "./components/Footer";
import { Login } from "./screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Signup } from "./screens/Signup.js";
import { CartProvider } from "./components/ContextReducer.js";
import { MyOrder } from "./screens/MyOrder.js";

function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/createuser" element={<Signup />}></Route>
          <Route path="/myorder" element={<MyOrder />}></Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
