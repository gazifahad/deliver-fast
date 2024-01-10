import React from "react";

export const Search = () => {
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    // console.log(e.target.elements.search.value);
    await fetch(`http://localhost:5000/api/foodData?search=${searchValue}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="d-flex justify-content-center">
      <input
        name="search"
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success text-white " type="submit">
        Search
      </button>
    </div>
  );
};
