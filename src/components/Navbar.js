import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export const Navbar = () => {
  const data = useCart();
  const [cartView, setCartView] = useState(false);
  const loggedIn = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const handleLogout = async () => {
    await localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to={"/"}>
          Deliver-Fast
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between "
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {loggedIn && (
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  My Orders
                </Link>
              </li>
            )}
          </ul>
          {loggedIn ? (
            <div>
              <div
                className="btn bg-white text-success mx-2"
                onClick={() => setCartView(true)}
              >
                My Cart{" "}
                <Badge pill bg="danger">
                  {data.length > 0 ? data.length : ""}
                </Badge>
              </div>
              {cartView ? (
                <Modal onClose={() => setCartView(false)}>
                  {" "}
                  <Cart />{" "}
                </Modal>
              ) : null}
              <div
                className="btn bg-white text-danger mx-2"
                onClick={handleLogout}
              >
                logout
              </div>
            </div>
          ) : (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>

              <Link className="btn bg-white text-success mx-1" to="/createuser">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
