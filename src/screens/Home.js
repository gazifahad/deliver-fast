import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { Search } from "../components/Search";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const loadData = async () => {
    let response = await fetch(
      "https://deliverfast.onrender.com/api/foodData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();

    setFoodItems(response.foodItems);
    setFoodCat(response.foodCategory);

    // setFoodCat(response.food);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-inner"
            id="carousel"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-caption z-3 ">
              <div className="d-flex justify-content-center">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  name="search"
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/50*50/?pizza"
                className=" d-block w-100 "
                style={{ filter: "brightness(40%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/50*50/?burger"
                className=" d-block w-100  "
                style={{ filter: "brightness(40%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/50*50/?sushi"
                className="  d-block w-100  "
                style={{ filter: "brightness(40%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat
          ? foodCat.map((cat) => {
              return (
                <div key={cat._id}>
                  <div className=" fs-3  m-3">{cat.CategoryName} </div>
                  <hr />
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {foodItems &&
                      foodItems
                        .filter(
                          (item) =>
                            item.CategoryName === cat.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filteredItems) => {
                          return (
                            <div key={filteredItems._id}>
                              <Card foodItems={filteredItems} />
                            </div>
                          );
                        })}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
