import React from "react";
import Metric from "./Metric";
const ContentRowMovies = () => {
  const data = [
    {
      color: "primary",
      title: "Movies in Data:Base",
      value: 21,
      icon: "fa-film",
    },
    {
      color: "succes",
      title: "Total aWards",
      value: 79,
      icon: "fa-awards",
    },
    {
      color: "warning",
      title: "Actors quantity",
      value: 49,
      icon: "fa-user",
    },
  ];
  return (
    <div className="row">
      {data.map(({ color, title, value, icon }, index) => (
        <Metric
          color={color}
          title={title}
          value={value}
          icon={icon}
          key={title + index}
        />
      ))}
    </div>
  );
};
export default ContentRowMovies;
