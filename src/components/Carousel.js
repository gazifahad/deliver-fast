import React from "react";
import { Search } from "./Search";

export const Carousel = () => {
  return (
    // src="https://source.unsplash.com/random/900×700/?pizza"
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
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/50*50/?pizza"
            className=" d-block w-100 "
            style={{ filter: "brightness(40%)" }}
            alt="..."
          />
          <Search />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/50*50/?burger"
            className=" d-block w-100  "
            style={{ filter: "brightness(40%)" }}
            alt="..."
          />
          <Search />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/50*50/?sushi"
            className="  d-block w-100  "
            style={{ filter: "brightness(40%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-caption d-none d-md-block">
          <div>
            <Search />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
