import React from "react";
import SmallCard from "./SmallCard";

let moviesInDB = {
  title: "Movies in data base",
  color: "danger",
  cuantity: 21,
  icon: "fa-clipboard-list",
};

let totalAwards = {
  title: "Awards",
  color: "primary",
  cuantity: "70",
  icon: "fa-award",
};

let actorsQuantity = {
  title: "Quantity",
  color: "success",
  cuantity: "51",
  icon: "fa-user-check",
};

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies() {
  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
