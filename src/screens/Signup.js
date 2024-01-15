import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://deliverfast.onrender.com/api/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      }
    );
    const json = await response.json();

    if (!json.success) {
      alert("enter valid credentials");
    } else if (json.success) {
      alert("sign up successfull please login");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={credentials.name}
              onChange={onChange}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              address
            </label>
            <input
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => setChecked(!checked)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree to the terms and conditions
            </label>
          </div>
          <button
            disabled={checked ? false : true}
            type="submit"
            className="my-3 btn btn-primary"
          >
            Submit
          </button>
          <span className="ml-5">
            Already a user?
            <Link to={"/login"} className="m-3 btn btn-danger ">
              Login
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};
