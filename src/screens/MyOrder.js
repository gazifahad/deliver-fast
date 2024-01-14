import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MyOrder = () => {
  const [orderData, setorderData] = useState([]);

  const fetchMyOrder = async () => {
    // console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/api/myOrderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      const data = await res.json();
      const nestedArray = data?.orderData?.order_data
        .flat()
        .map((innerArray) => innerArray);
      const flattenedArray = nestedArray.flatMap((item) =>
        Array.isArray(item) ? item : [item]
      );

      await setorderData(flattenedArray || []);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);
  //   console.log(orderData?.order_data);
  //   if (orderData?.order_data !== undefined) {
  //   }
  //   console.log(mainData);
  //   orderData.map((order) => {
  //     order.Order_date
  //       ? console.log("date found")
  //       : console.log("date not found");
  //   });

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {orderData.reverse().map((arrayData) =>
            arrayData.Order_date ? (
              <div className="mt-4 fst-italic fs-5 " key={arrayData.Order_date}>
                {arrayData.Order_date}
                <hr />
              </div>
            ) : (
              <div key={arrayData.id}>
                {" "}
                <div className="col-12 col-md-6 col-lg-3">
                  <div
                    className="card mt-3"
                    style={{ width: "16rem", maxHeight: "360px" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{arrayData.name}</h5>
                      <div
                        className="container w-100 p-0"
                        style={{ height: "38px" }}
                      >
                        <span className="m-1">{arrayData.qty}</span>
                        <span className="m-1">{arrayData.size}</span>

                        <div className=" d-inline ms-2 h-100 w-20 fs-5">
                          ₹{arrayData.price}/-
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
