import React, { useState } from "react";
import { useCart, useDispatch } from "./ContextReducer";

export const Card = ({ foodItems }) => {
  const dispatch = useDispatch();
  const data = useCart();

  const { _id, name, img, description, options } = foodItems;
  const priceOptions = Object.keys(options[0]);
  const priceOptions1 = Object.values(options[0]);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("half");
  const selectedOption = options[0][size];
  const finalPrice = qty * selectedOption;
  const handleAddToCart = async () => {
    let food = [];

    const found = data.find((item) => {
      return item.id === _id && item.size === size;
    });
    if (found) {
     
      await dispatch({
        type: "UPDATE",
        id: _id,
        price: finalPrice,
        qty: qty,
        size: size,
      });
      return;
    }

    // for (const item of data) {
    //   console.log(item.size);
    //   if (item.id === _id && item.size === size) {
    //     food = item;
    //     await dispatch({
    //       type: "UPDATE",
    //       id: _id,
    //       price: finalPrice,
    //       qty: qty,
    //     });
    //     return;
    //   }
    //   break;
    // }

    // console.log(new Date());
    // if (food !== []) {
    //   if (food.size === size) {

    //     food = [];
    //     return;
    //   } else if (food.size !== size) {
    //     console.log(food.size, size);
    //     await dispatch({
    //       type: "ADD",
    //       id: _id,
    //       name: name,
    //       price: finalPrice,
    //       qty: qty,
    //       size: size,
    //       img: img,
    //     });
    //     food = [];
    //     console.log("Size different so simply ADD one more to the list");
    //     return;
    //   }
    //   return;
    // }

    await dispatch({
      type: "ADD",
      id: _id,
      name: name,
      price: finalPrice,
      qty: qty,
      size: size,
    });

    // setBtnEnable(true)
  };

  return (
    <div className="col">
      <div
        className="p-0 card mt-3 bg-light border border-1 shadow-lg  "
        // style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          src={img}
          className="card-img-top img-fluid "
          style={{ height: "200px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="container w-100 ">
            <select
              className="m-2 h-100 bg-black text-white  p-1 rounded"
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option className=" " key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 p-1 bg-black text-white  rounded "
              onChange={(e) => {
                setSize(e.target.value);
              }}
            >
              {/* <option selected disabled>
                select
              </option> */}
              {priceOptions.map((option) => {
                return (
                  <option key={option} className=" text-light " value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <div className=" h-100 fs-5">total price: {finalPrice}$</div>
          </div>
          <hr />
          <button
            className="btn bg-black text-white  justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
