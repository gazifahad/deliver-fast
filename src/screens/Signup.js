import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
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
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="name" className="form-label">
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
            <div id="emailHelp" className="form-text">
              Your name
            </div>
          </div>
          <div className="mb-3">
            <label for="name" className="form-label">
              address
            </label>
            <input
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
              type="text"
              className="form-control"
            />
            <div className="form-text">Your name</div>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
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
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
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
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" for="exampleCheck1">
              I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to={"/login"} className="m-3 btn btn-danger ">
            Already a user?
          </Link>
        </form>
      </div>
    </>
  );
};
