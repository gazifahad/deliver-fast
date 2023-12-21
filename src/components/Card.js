import React from "react";

export const Card = () => {
  return (
    <div>
      <div
        className="card mt-3 "
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some important text</p>
          <div className="container w-100 ">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded ">
              <option value="half">half</option>
              <option value="full"> full</option>
            </select>
            <div className=" d-inline h-100 fs-1" style={{ fontSize: "20px" }}>
              total price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
